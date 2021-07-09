const router = require('express').Router();
const {
  Campaign,
  Audit,
  Demo,
  Rep,
  Venue,
  Brand,
  Region,
  Product,
  ReportTemplate,
  User,
} = require('../../models');
const authSwitch = require('../../utils/authSwitch');
const authJwt = require("../../utils/authJwt");
const adminOnlyRoute = require('../../utils/adminOnlyRoute');

router.get('/', authJwt, authSwitch, async (req, res) => {
  const filter = req.user_role
  console.log(filter);
  
  let events = [];
  try {
    const demoData = await Demo.findAll({
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
      where: filter,
    });
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
      where: filter,
    });

    demoData.forEach((demo) => events.push(demo));
    // console.log(events);
    auditData.forEach((audit) => events.push(audit));
    // console.log(events);
    auditData.forEach((audit) => events.push(audit))
    // console.log(events);

    res.status(200).json(events);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', authJwt, authSwitch, async (req, res) => {
  try {
    const demoData = await Demo.findByPk(req.params.id, {
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
    if (!demoData) {
      res.status(404).json({ message: 'No demo found with this id!' });
      return;
    }
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/reps/schedule', async (req, res) => {
//   console.log('hello rep schedule route');
//   try {
//     const demoData = await Demo.findAll({
//       where: {
//         user_id: req.headers.user_id,
//       },
//       include: [
//         {
//           model: Campaign,
//           as: 'campaign',
//           include: {
//             model: ReportTemplate,
//             as: 'report_template',
//           },
//           include: {
//             model: Brand,
//             as: 'brand',
//             include: {
//               model: Product,
//               as: 'products',
//             },
//           },
//         },
//         {
//           model: User,
//           as: 'user',
//         },
//         {
//           model: Venue,
//           as: 'venue',
//           include: {
//             model: Region,
//             as: 'region',
//           },
//         },
//       ],
//     });
//     res.status(200).json(demoData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/brands/schedule', async (req, res) => {
//   console.log('hello contact schedule route');
//   try {
//     const demoData = await Demo.findAll({
//       where: {
//         brand_id: req.headers.brand_id,
//       },
//       include: [
//         {
//           model: Campaign,
//           as: 'campaign',
//           include: {
//             model: ReportTemplate,
//             as: 'report_template',
//           },
//           include: {
//             model: Brand,
//             as: 'brand',
//             include: {
//               model: Product,
//               as: 'products',
//             },
//           },
//         },
//         {
//           model: User,
//           as: 'user',
//         },
//         {
//           model: Venue,
//           as: 'venue',
//           include: {
//             model: Region,
//             as: 'region',
//           },
//         },
//       ],
//     });
//     res.status(200).json(demoData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/', authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const demoData = await Demo.create({
      date: req.body.date,
      start_time: req.body.start_time,
      duration: req.body.duration,
      venue_id: req.body.venue_id,
      campaign_id: req.body.campaign_id,
      brand_id: req.body.brand_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', authJwt, adminOnlyRoute, async (req, res) => {
  try {
    const demoData = await Demo.update(
      {
        date: req.body.date,
        start_time: req.body.start_time,
        duration: req.body.duration,
        venue_id: req.body.venue_id,
        campaign_id: req.body.campaign_id,
        brand_id: req.body.brand_id,
        user_id: req.body.user_id,
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

router.delete('/:id', authJwt, adminOnlyRoute, async (req, res) => {
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
