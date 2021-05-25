const router = require("express").Router();
const Rep = require("../../models/Rep");

router.get("/", async (req, res) => {
  try {
    const repData = await Rep.findAll();
    res.status(200).json(repData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const repData = await Rep.findByPk(req.params.id);
    if (!repData) {
      res.status(404).json({ message: "No rep found with this id!" });
      return;
    }
    res.status(200).json(repData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to create/add a demo
// router.post("/", async (req, res) => {
//   try {
//     const repData = await Demo.create({
//       campaign: req.body.campaign,
//       brand: req.body.brand,
//       ba_name: req.body.ba_name,
//       location: req.body.location,
//     });
//     res.status(200).json(repData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const repData = await Demo.update(
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
//     res.status(200).json(repData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    const repData = await Demo.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!repData) {
      res
        .status(404)
        .json({ message: `No rep found with id: ${req.params.id}!` });
    }

    res.status(200).json(repData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
