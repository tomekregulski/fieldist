const { Brand } = require('../models');

const brandData = [
  {
    name: "Sir Kensington's",
    image: '',
  },
  {
    name: 'Bowery Farming',
    image: '',
  },
  {
    name: 'Simmer',
    image: '',
  },
  {
    name: 'Saso Pepper Company',
    image: '',
  },
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;
