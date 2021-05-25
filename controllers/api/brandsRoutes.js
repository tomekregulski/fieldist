const router = require("express").Router();
const { Brand, BrandContact, Product, Campaign } = require("../../models");

router.get("/", async (req, res) => {
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

router.get("/:id", async (req, res) => {
  try {
    const brandData = await Brand.findByPk(req.params.id,
        {
        include: [
            {
            model: Region,
            as: 'region',
        },
    ],
    }
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

// route to create/add a demo
// router.post("/", async (req, res) => {
//   try {
//     const brandData = await Brand.create({
//       campaign: req.body.campaign,
//       brand: req.body.brand,
//       ba_name: req.body.ba_name,
//       location: req.body.location,
//     });
//     res.status(200).json(brandData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const brandData = await Brand.update(
//       {
//         campaign: req.body.campaign,
//         brand: req.body.brand,
//         ba_name: req.body.ba_name,
//         location: req.body.location,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json(brandData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete("/:id", async (req, res) => {
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
