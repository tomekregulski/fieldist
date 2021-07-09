const { User } = require('../models');

const UserData = [
  {
    email: 'admin@fieldist.com',
    password: 'admin',
    first_name: 'admin',
    last_name: 'test',
    brand_id: null,
    role: ['admin'],
    image: '',
  },
  {
    email: 'rep1@fieldist.com',
    password: 'rep1',
    first_name: 'rep1',
    last_name: 'test',
    brand_id: null,
    role: 'rep',
    image: '',
  },
  {
    email: 'rep2@fieldist.com',
    password: 'rep2',
    first_name: 'rep2',
    last_name: 'test',
    brand_id: null,
    role: 'rep',
    image: '',
  },
  {
    email: 'contact1@fieldist.com',
    password: 'contact1',
    first_name: 'contact1',
    last_name: 'test',
    brand_id: 1,
    role: 'contact',
    image: '',
  },
  {
    email: 'contact2@fieldist.com',
    password: 'contact2',
    first_name: 'contact2',
    last_name: 'test',
    brand_id: 2,
    role: 'contact',
    image: '',
  },
  {
    email: 'contact3@fieldist.com',
    password: 'contact3',
    first_name: 'contact3',
    last_name: 'test',
    brand_id: 3,
    role: 'contact',
    image: '',
  },
  {
    email: 'contact4@fieldist.com',
    password: 'contact4',
    first_name: 'contact4',
    last_name: 'test',
    brand_id: 4,
    role: 'contact',
    image: '',
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
