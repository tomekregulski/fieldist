const { Brand } = require('../models');

const brandData = [
  // {
  //   name: "Sir Kensington's",
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625814878/jibcfczmin4mfxcmxhdy.jpg',
  // },
  // {
  //   name: 'Bowery Farming',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815033/vqalfan5r3ygm9grswgy.jpg',
  // },
  // {
  //   name: 'Simmer',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815223/micz5vyg9kucp9y6rxdi.png',
  // },
  // {
  //   name: 'Saso Pepper Company',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  // },
  {
    name: "Barebones Broth",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Bloom Honey",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Bowery Farming",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Buchi",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Cappello's",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Cucina Antica",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Egglife",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Evo Hemp",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Goldthread",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Julie's Real",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Lavva",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Raaka Chocolate",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "SaSo Pepper Co.",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Simmer",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Sir Kensington's",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Snow Monkey",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "The Jackfruit Company",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Tio Gazpacho",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Tony's Chocolonely",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
  {
    name: "Whisked",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  }
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;
