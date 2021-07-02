const router = require("express").Router();
const adminsRoutes = require("./adminsRoutes");
const demosRoutes = require("./demosRoutes");
const auditsRoutes = require("./auditsRoutes");
const campaignsRoutes = require("./campaignsRoutes");
const repsRoutes = require("./repsRoutes");
const venuesRoutes = require("./venuesRoutes");
const regionsRoutes = require("./regionsRoutes");
const brandsRoutes = require("./brandsRoutes");
const productsRoutes = require("./productsRoutes");
const brand_contactsRoutes = require("./brand_contactsRoutes");
const usersRoutes = require("./usersRoutes")
const rolesRoutes = require("./rolesRoutes")
// const campaignProductsRoutes = require("./campaignProductsRoutes")

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.use("/admins", adminsRoutes);
router.use("/demos", demosRoutes);
router.use("/campaigns", campaignsRoutes);
router.use("/reps", repsRoutes);
router.use("/venues", venuesRoutes);
router.use("/regions", regionsRoutes);
router.use("/brands", brandsRoutes);
router.use("/brand_contacts", brand_contactsRoutes);
router.use("/products", productsRoutes);
router.use("/audits", auditsRoutes);
// router.use("/testAPI", testAPIRouter);
router.use("/users", usersRoutes);
router.use("/roles", rolesRoutes);

// router.use("./campaign_products", campaignProductsRoutes);

module.exports = router;
