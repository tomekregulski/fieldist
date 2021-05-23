const router = require('express').Router();
// const sorter = require('../utils/sorter');
// const withAuth = require('../utils/auth');
// const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    res.render('index');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;