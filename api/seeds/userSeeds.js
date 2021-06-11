const { User } = require('../models');

const UserData = [
  {
    'email': 'contact@fieldist.com',
    'password': 'contact',
    'first_name': 'contact',
    'last_name': 'test',
    'brand_id': null,
    'role': 'contact',
  },
  {
    'email': 'rep@fieldist.com',
    'password': 'rep',
    'first_name': 'rep',
    'last_name': 'test',
    'brand_id': null,
    'role': 'rep',
  },
  {
    'email': 'admin@fieldist.com',
    'password': 'admin',
    'first_name': 'admin',
    'last_name': 'test',
    'brand_id': null,
    'role': 'admin',
  },
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;