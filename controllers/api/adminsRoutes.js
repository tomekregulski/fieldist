const { Admin } = require("../../models");
const router = require("express").Router();

// get all admins for auth view
router.get("/", async (req, res) => {
  try {
    // const adminData = 'Hello Admin'
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
    });
    res.status(200).json(adminData);
  } catch (err) {
    res.status(400).json(err);
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