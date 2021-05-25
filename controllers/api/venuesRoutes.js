const router = require("express").Router();
const { Venue, Region } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const venueData = await Venue.findAll(
        {
        include: [
            {
            model: Region,
            as: 'region',
        },
    ],
    },
    );
    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const venueData = await Venue.findByPk(req.params.id,
        {
        include: [
            {
            model: Region,
            as: 'region',
        },
    ],
    }
    );
    if (!venueData) {
      res.status(404).json({ message: "No rep found with this id!" });
      return;
    }
    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to create/add a demo
// router.post("/", async (req, res) => {
//   try {
//     const venueData = await Venue.create({
//       campaign: req.body.campaign,
//       brand: req.body.brand,
//       ba_name: req.body.ba_name,
//       location: req.body.location,
//     });
//     res.status(200).json(venueData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const venueData = await Venue.update(
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
//     res.status(200).json(venueData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    const venueData = await Venue.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!venueData) {
      res
        .status(404)
        .json({ message: `No rep found with id: ${req.params.id}!` });
    }

    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
