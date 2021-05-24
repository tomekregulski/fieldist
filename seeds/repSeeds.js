const { Rep } = require('../models');

const repData = [
  {
    'email': 'jim@fieldist.com',
    'password': 'password123',
    'first_name': 'Jim',
    'last_name': 'Phelps',
  },
  {
    'email': 'felica@fieldist.com',
    'password': 'password456',
    'first_name': 'Felica',
    'last_name': 'Roberts',
  },
  {
    'email': 'hunter@fieldist.com',
    'password': 'password789',
    'first_name': 'Hunter',
    'last_name': 'Grace',
  },
  {
    'email': 'morgan@fieldist.com',
    'password': 'password000',
    'first_name': 'Morgan',
    'last_name': 'Hanes',
  },
];

const seedReps = () => Rep.bulkCreate(repData);

module.exports = seedReps;