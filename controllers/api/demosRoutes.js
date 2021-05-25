const router = require("express").Router();
const { Campaign, Demo, Rep, Venue, Brand, Region, Product, ReportTemplate } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const demoData = await Demo.findAll(
      {
      include: [
        {
          model: Campaign,
          as: 'campaign',
          include: {
              model: ReportTemplate,
              as: 'report_template',
            },
          include: {
            model: Brand,
            as: 'brand',
            include: {
              model: Product,
              as: 'products',
            },
          },
        },
        {
          model: Rep,
          as: 'rep',
        },
        {
          model: Venue,
          as: 'venue',
          include: {
            model: Region,
            as: 'region',
          },
        },
      ],
    },
    );
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const demoData = await Demo.findByPk(req.params.id);
    if (!demoData) {
      res.status(404).json({ message: "No demo found with this id!" });
      return;
    }
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to create/add a demo
router.post("/", async (req, res) => {
  try {
    const demoData = await Demo.create({
      campaign: req.body.campaign,
      brand: req.body.brand,
      ba_name: req.body.ba_name,
      location: req.body.location,
    });
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const demoData = await Demo.update(
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
    res.status(200).json(demoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const demoData = await Demo.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!demoData) {
      res
        .status(404)
        .json({ message: `No demo found with id: ${req.params.id}!` });
    }

    res.status(200).json(demoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
