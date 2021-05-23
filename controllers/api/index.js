const router = require("express").Router();
const adminsRoutes = require("./adminsRoutes");
const demoRoutes = require("./demoRoutes");

router.use("/admins", adminsRoutes);
router.use("/demos", demoRoutes);

module.exports = router;
