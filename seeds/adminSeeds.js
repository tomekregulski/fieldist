const { Admin } = require('../models');

const adminData = [
  {
    'email': 'tomek@fieldist.com',
    'password': 'password123',
    'first_name': 'Tomek',
    'last_name': 'Regulski'
  },
];

const seedAdmins = () => Admin.bulkCreate(adminData);

module.exports = seedAdmins;