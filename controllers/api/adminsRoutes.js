// const { Admin } = require("../../models");
const router = require("express").Router();

// get all admins for auth view
router.get("/", async (req, res) => {
  try {
    const adminData = 'Hello Admin'
    // const allAdmins = await Admin.findAll();
    // const adminData = allAdmins.map((admin) => admin.get({ plain: true }));
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;