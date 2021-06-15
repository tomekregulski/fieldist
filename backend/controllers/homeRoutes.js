const router = require('express').Router();
const path = require('path');
// const sorter = require('../utils/sorter');
const withAuth = require('../utils/auth');
// const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    res.render('index', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     // res.render('dashboard');
//     res.sendFile(path.join(__dirname, "../public/dashboard.html", {
//       logged_in: req.session.logged_in,
//     }));
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;