const router = require("express").Router();
const { Product } = require("../../models");
const authJwt = require("../../utils/authJwt");
const adminOnlyRoute = require('../../utils/adminOnlyRoute');

router.get("/", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const productData = await Product.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const productData = await Venue.findByPk(req.params.id);
    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const productData = await Product.create({
      campaign: req.body.campaign,
      brand: req.body.brand,
      ba_name: req.body.ba_name,
      location: req.body.location,
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const productData = await Product.update(
      {
        campaign: req.body.campaign,
        brand: req.body.brand,
        ba_name: req.body.ba_name,
        location: req.body.location,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res
        .status(404)
        .json({ message: `No product found with id: ${req.params.id}!` });
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
