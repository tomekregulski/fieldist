const router = require("express").Router();
const { Brand, BrandContact, Product, Region } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const brandContactData = await BrandContact.findAll();
    res.status(200).json(brandContactData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const brandContactData = await BrandContact.findByPk(req.params.id,
        {
        include: [
            {
            model: Brand,
            as: 'brand',
        },
    ],
    }
    );
    if (!brandContactData) {
      res.status(404).json({ message: "Noo contact found with this id!" });
      return;
    }
    res.status(200).json(brandContactData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const brandContactData = await BrandContact.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      brand_id: req.body.brand_id,
    });
    res.status(200).json(brandContactData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const brandContactData = await BrandContact.update(
      {
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        brand_id: req.body.brand_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(brandContactData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const brandContactData = await BrandContact.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!brandContactData) {
      res
        .status(404)
        .json({ message: `No contact found with id: ${req.params.id}!` });
    }

    res.status(200).json(brandContactData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
