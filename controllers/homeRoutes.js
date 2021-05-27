const router = require('express').Router();
const path = require('path');
// const sorter = require('../utils/sorter');
const withAuth = require('../utils/auth');
// const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    res.render('index', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // res.render('dashboard');
    res.sendFile(path.join(__dirname, "../public/dashboard.html", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    }));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;