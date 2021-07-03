const { User, Admin, Rep, BrandContact } = require('../../models');
const router = require('express').Router();
const role = require('../../_helpers/role');
const authHeader = require('../../utils/auth_header');
const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config");
const authJwt = require("../../utils/authJwt");
const auth_header = require("../../utils/auth_header");

router.get('/', authJwt, async (req, res) => {
  // const token = "PASTE IN A TEST TOKEN";
  // const decoded = jwt.verify(token, 'bezkoder-secret-key');
  // console.log(decoded.foo) // bar
  try {
    const allUsers = await User.findAll();
    const userData = allUsers.map((user) => user.get({ plain: true }));
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      brand_id: req.body.brand_id,
      role: req.body.role,
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/reps', async (req, res) => {
  try {
    const allUsers = await User.findAll({
      where: {
        role: 'rep',
      },
    });
    const userData = allUsers.map((user) => user.get({ plain: true }));
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', auth_header, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(userData);
    if (!userData) {
      res.status(400).json('Incorrect username or password...');
      return;
    }
    console.group(req.body.password, req.body.email);
    // const passwordData = await userData.validatePassword(req.body.password);

    // if (!passwordData) {
    //   res.status(400).json("Incorrect password or password...");
    //   return;
    // }

    const token = jwt.sign({ id: userData.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
    
    const authorities = ("ROLE_" + userData.role.toUpperCase());

    console.log(userData.role);
    console.log('password OK');
    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.brand_id = userData.brand_id;
    //   req.session.role = userData.role;
    //   req.session.logged_in = true;
    //   req.session.token = token;
    //   req.session.roles = authorities;
    // });

    console.log(req.session);
    
    // res.set(
    //   "Access-Control-Allow-Headers",
    //   "x-access-token, Origin, Content-Type, Accept"
    // );

      // var authorities = [];
      // user.getRoles().then(roles => {
      //   for (let i = 0; i < roles.length; i++) {
      //     authorities.push("ROLE_" + roles[i].name.toUpperCase());
      //   }

      // res.status(200).send(req.session);
        res.status(200).send({
          id: userData.id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          roles: authorities,
          accessToken: token
          // message: `Welcome aboard, ${req.session.role} ${userData.first_name}!`,
        });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    console.log('loggin out now...');
    req.session.destroy(() => {
      res.status(204).end({});
    });
  } else {
    res.status(404).end();
    console.log('test');
  }
});

module.exports = router;
