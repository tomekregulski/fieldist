const { Rep } = require('../models');

const repData = [
  {
    'email': 'jim@fieldist.com',
    'password': 'password123',
    'first_name': 'Jim',
    'last_name': 'Phelps',
    'role': 'rep',
  },
  {
    'email': 'felica@fieldist.com',
    'password': 'password456',
    'first_name': 'Felica',
    'last_name': 'Roberts',
    'role': 'rep',
  },
  {
    'email': 'hunter@fieldist.com',
    'password': 'password789',
    'first_name': 'Hunter',
    'last_name': 'Grace',
    'role': 'rep',
  },
  {
    'email': 'morgan@fieldist.com',
    'password': 'password000',
    'first_name': 'Morgan',
    'last_name': 'Hanes',
    'role': 'rep',
  },
];

const seedReps = () => Rep.bulkCreate(repData);

module.exports = seedReps;