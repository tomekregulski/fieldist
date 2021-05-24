const { Brand } = require('../models');

const brandData = [
  {
    'name': "Sir Kensington's",
  },
  {
    'name': 'Bowery Farming',
  },
  {
    'name': 'Simmer',
  },
  {
    'name': 'Saso Pepper Company',
  },
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;