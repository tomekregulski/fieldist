const { Admin } = require("../../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const allAdmins = await Admin.findAll();
    const adminData = allAdmins.map((admin) => admin.get({ plain: true }));
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const adminData = await Admin.findByPk(req.params.id);
    
    if (!adminData) {
      res.status(404).json({ message: "No admin found with this id!" });
      return;
      }

      res.status(200).json(adminData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
  try {
    const adminData = await Admin.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      role: req.body.role,
    });
    res.status(200).json(adminData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const adminData = await Admin.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(adminData);
    if (!adminData) {
      res.status(400).json("Incorrect username or password...");
      return;
    }
    console.group(req.body.password, req.body.email);
    const passwordData = await adminData.validatePassword(req.body.password);

    // if (!passwordData) {
    //   res.status(400).json("Incorrect password or password...");
    //   return;
    // }
    console.log('password OK');
    req.session.save(() => {
      // req.session.user_id = adminData.id;
      // req.session.email = adminData.email;
      req.session.logged_in = true;
      if (adminData.role === 'admin') {
        req.session.role = 'admin';
        console.log('welcome admin');
      }

      res.status(200).json({ user: adminData, message: `Welcome aboard ${req.session.role}!` });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  console.log('logging out now...');
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/:id", async (req, res) => {
  try {
    const adminData = await Admin.update(
      {
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const adminData = await Admin.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!adminData) {
      res
        .status(404)
        .json({ message: `No admin found with id: ${req.params.id}!` });
    }

    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;