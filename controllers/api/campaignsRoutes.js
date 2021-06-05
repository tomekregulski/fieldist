const router = require("express").Router();
const { Campaign, Product, Demo, Audit, CampaignProduct } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const campaignData = await Campaign.findAll(
        {
            include: [
            {
                model: Demo,
                as: 'demos',
            },
            {
                model: Audit,
                as: 'audits',
            },
            // {
            //   model: CampaignProduct,
            //   as: 'campaign_products',
            //   include: {
            //     model: Product,
            //     as: 'product',
            //   },
            // },
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

router.post("/", async (req, res) => {
  try {
    const campaignData = await Campaign.create({
      name: req.body.name,
      brand_id: req.body.brand_id,
      product_id: req.body.product_id,
      report_template_id: req.body.report_template_id,
    });
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const campaignData = await Campaign.update(
      {
        name: req.body.name,
        brand_id: req.body.brand_id,
        report_template_id: req.body.report_template_id,
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
    const campaignData = await Campaign.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!campaignData) {
      res
        .status(404)
        .json({ message: `No campaign found with id: ${req.params.id}!` });
    }

    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
