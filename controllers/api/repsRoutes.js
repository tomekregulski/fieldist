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

router.post("/", async (req, res) => {
  try {
    const repData = await Rep.create({
      email: req.body.email,
	    password: req.body.password,
	    first_name: req.body.first_name,
	    last_name: req.body.last_name,
    });
    res.status(200).json(repData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const repData = await Rep.update(
      {
        email: req.body.email,
	      password: req.body.password,
	      first_name: req.body.first_name,
	      last_name: req.body.last_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(repData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const repData = await Rep.destroy({
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
