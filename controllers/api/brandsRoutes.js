const router = require("express").Router();
const { Brand, BrandContact, Product, Campaign } = require("../../models");
const adminOnlyRoute = require('../../utils/adminOnlyRoute');
const authJwt = require("../../utils/authJwt");

router.get("/", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.findAll(
        {
            include: [
                {
                    model: Product,
                    as: 'products',
                },
                {
                    model: Campaign,
                    as: 'campaigns',
                },
                {
                    model: BrandContact,
                    as: 'brand_contact',
                },
            ],
        },
    );
    res.status(200).json(brandData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.findByPk(req.params.id,
        {
            include: [
                {
                    model: Product,
                    as: 'products',
                },
                {
                    model: Campaign,
                    as: 'campaigns',
                },
                {
                    model: BrandContact,
                    as: 'brand_contact',
                },
            ],
        },
    );
    if (!brandData) {
      res.status(404).json({ message: "No rep found with this id!" });
      return;
    }
    res.status(200).json(brandData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.create({
      name: req.body.name,
    });
    res.status(200).json(brandData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(brandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!brandData) {
      res
        .status(404)
        .json({ message: `No rep found with id: ${req.params.id}!` });
    }

    res.status(200).json(brandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
