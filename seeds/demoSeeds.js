const { Demo } = require('../models');

const demoData = [
  {
    "campaign": "Simmer Demos",
    "brand": "Simmer",
    "ba_name": "Tomek",
    "location": "Whole Foods Market - Columbus Circle"
  },
  {
    "campaign": "Simmer Demos",
    "brand": "Simmer",
    "ba_name": "Tomek",
    "location": "Whole Foods Market - Upper West Side"
  }
];

const seedDemos = () => Demo.bulkCreate(demoData);

module.exports = seedDemos;