const router = require("express").Router();
const adminsRoutes = require("./adminsRoutes");

router.use("/admins", adminsRoutes);

module.exports = router;
