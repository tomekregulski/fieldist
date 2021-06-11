const { User } = require("../../models");
const router = require("express").Router();
const role = require('../../_helpers/role');

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const userData = allUsers.map((user) => user.get({ plain: true }));
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
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

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(userData);
    if (!userData) {
      res.status(400).json("Incorrect username or password...");
      return;
    }
    console.group(req.body.password, req.body.email);
    // const passwordData = await userData.validatePassword(req.body.password);

    // if (!passwordData) {
    //   res.status(400).json("Incorrect password or password...");
    //   return;
    // }
    console.log(userData.role);
    console.log('password OK');
    req.session.save(() => {
      // req.session.user_id = userData.id;
      req.session.role = userData.role;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: `Welcome aboard ${req.session.role}!` });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    console.log('loggin out now...');
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;