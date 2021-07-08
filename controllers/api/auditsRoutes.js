<<<<<<< HEAD
const router = require("express").Router();
const { Campaign, Audit, Rep, Venue, Brand, Region, Product, ReportTemplate, User } = require("../../models");
=======
const router = require('express').Router();
const {
  Campaign,
  Audit,
  Rep,
  Venue,
  Brand,
  Region,
  Product,
  ReportTemplate,
  User,
} = require('../../models');
const authAdmin = require('../../utils/authAdmin');
>>>>>>> 217ae14d8e4a160916063835881b22ddaadf2eb8

router.get('/', async (req, res) => {
  try {
    const auditData = await Audit.findAll({
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
          model: User,
          as: 'user',
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
    });
    res.status(200).json(auditData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const auditData = await Audit.findByPk(req.params.id, {
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
    });
    if (!auditData) {
      res.status(404).json({ message: 'No Audit found with this id!' });
      return;
    }
    res.status(200).json(auditData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const auditData = await Audit.create({
      date: req.body.date,
      venue_id: req.body.venue_id,
      campaign_id: req.body.campaign_id,
      brand_id: req.body.brand_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(auditData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const auditData = await Audit.update(
      {
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        duration: req.body.duration,
        venue_id: req.body.venue_id,
        campaign_id: req.body.campaign_id,
        brand_id: req.body.brand_id,
        rep_id: req.body.rep_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(auditData);
    console.log('systems go: ', res);
  } catch (err) {
    res.status(500).json(err);
    console.log('no go: ', err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const auditData = await Audit.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!auditData) {
      res
        .status(404)
        .json({ message: `No demo found with id: ${req.params.id}!` });
    }

    res.status(200).json(auditData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
