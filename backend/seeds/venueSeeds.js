const { Venue } = require('../models');

const venueData = [
  {
    "name": "Whole Foods Market - Columbus Circle",
    "address": "10 Columbus Circle",
    "city": "New York",
    "state": "NY",
    "zip": 10019,
    "region_id": 1
  },
  {
    "name": "Whole Foods Market - Portland ME",
    "address": "2 Somerset St",
    "city": "Portland",
    "state": "ME",
    "zip": 04101,
    "region_id": 2
  },
  {
    "name": "Whole Foods Market - Rockville",
    "address": "11355 Woodglen Dr",
    "city": "Rockville",
    "state": "MD",
    "zip": 20852,
    "region_id": 3
  },
];

const seedVenues = () => Venue.bulkCreate(venueData);

module.exports = seedVenues;