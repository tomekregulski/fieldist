const router = require("express").Router();
const { Region } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const regionData = await Region.findAll();
    res.status(200).json(regionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const regionData = await Venue.findByPk(req.params.id);
    if (!regionData) {
      res.status(404).json({ message: "No rep found with this id!" });
      return;
    }
    res.status(200).json(regionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to create/add a demo
// router.post("/", async (req, res) => {
//   try {
//     const regionData = await Region.create({
//       campaign: req.body.campaign,
//       brand: req.body.brand,
//       ba_name: req.body.ba_name,
//       location: req.body.location,
//     });
//     res.status(200).json(regionData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const regionData = await Region.update(
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
//     res.status(200).json(regionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    const regionData = await Region.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!regionData) {
      res
        .status(404)
        .json({ message: `No rep found with id: ${req.params.id}!` });
    }

    res.status(200).json(regionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
