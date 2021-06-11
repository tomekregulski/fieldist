const { BrandContact } = require('../models');

const brandContactData = [
  {
    'email': 'james@sirkensingtons.com',
    'password': 'password123',
    'first_name': 'James',
    'last_name': 'Pearsal',
    'brand_id': '1',
    'role': 'contact',
  },
  {
    'email': 'fain@boweryfarming.com',
    'password': 'password456',
    'first_name': 'Fain',
    'last_name': 'Reston',
    'brand_id': '2',
    'role': 'contact',
  },
  {
    'email': 'harbor@simmerfood.com',
    'password': 'password789',
    'first_name': 'Harbor',
    'last_name': 'Greer',
    'brand_id': '3',
    'role': 'contact',
  },
  {
    'email': 'melanie@sasopepperco.com',
    'password': 'password000',
    'first_name': 'Melanie',
    'last_name': 'Hellens',
    'brand_id': '4',
    'role': 'contact',
  },
];

const seedBrandContact = () => BrandContact.bulkCreate(brandContactData);

module.exports = seedBrandContact;