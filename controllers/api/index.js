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
// const campaignProductsRoutes = require("./campaignProductsRoutes")

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
// router.use("./campaign_products", campaignProductsRoutes);

module.exports = router;
