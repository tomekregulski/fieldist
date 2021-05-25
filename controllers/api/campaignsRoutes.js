const router = require("express").Router();
const { Campaign, Demo } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const campaignData = await Campaign.findAll(
        {
            include: [
            {
                model: Demo,
                as: 'demos',
            },
        ],
    },
    );
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const campaignData = await Campaign.findByPk(req.params.id, {
      include: [
        {
          model: Demo,
          as: 'demos',
        },
      ],
    },
    );
    if (!campaignData) {
      res.status(404).json({ message: "No campaign found with this id!" });
      return;
    }
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to create/add a demo
router.post("/", async (req, res) => {
  try {
    const campaignData = await Demo.create({
      campaign: req.body.campaign,
      brand: req.body.brand,
      ba_name: req.body.ba_name,
      location: req.body.location,
    });
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const campaignData = await Demo.update(
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
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const campaignData = await Demo.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!campaignData) {
      res
        .status(404)
        .json({ message: `No demo found with id: ${req.params.id}!` });
    }

    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
