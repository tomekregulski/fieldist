const { Demo } = require('../models');

const demoData = [
  {
    "date": "06/1/2021",
    "start_time": "11:00 AM",
    "end_time": "2:00 PM",
    "duration": "3 hours",
    "venue_id": 1,
    "campaign_id": 1,
    "brand_id": 1,
    "rep_id": 1,
  },
  {
    "date": "06/3/2021",
    "start_time": "11:00 AM",
    "end_time": "2:00 PM",
    "duration": "3 hours",
    "venue_id": 2,
    "campaign_id": 2,
    "brand_id": 2,
    "rep_id": 2,
  },
  {
    "date": "06/4/2021",
    "start_time": "11:00 AM",
    "end_time": "2:00 PM",
    "duration": "3 hours",
    "venue_id": 2,
    "campaign_id": 3,
    "brand_id": 3,
    "rep_id": 3,
  },
  {
    "date": "06/12/2021",
    "start_time": "11:00 AM",
    "end_time": "2:00 PM",
    "duration": "3 hours",
    "venue_id": 3,
    "campaign_id": 4,
    "brand_id": 4,
    "rep_id": 4,
  },
];

const seedDemos = () => Demo.bulkCreate(demoData);

module.exports = seedDemos;