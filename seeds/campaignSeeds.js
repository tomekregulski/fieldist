const { Campaign } = require('../models');

const campaignData = [
  {
    name: "Barebones Broth WFM Audits",
    brand_id: "1"
  },
  {
    name: "Bloom Honey Demos",
    brand_id: "2"
  },
  {
    name: "Bowery Faring - WFM Audits",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Stop and Shop Audits",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Walmart Audits",
    brand_id: "3"
  },
  {
    name: "Bowery Farming Demos",
    brand_id: "3"
  },
  {
    name: "Buchi Demos",
    brand_id: "4"
  },
  {
    name: "Cappello's Demos",
    brand_id: "5"
  },
  {
    name: "Cucina Antica Demos",
    brand_id: "6"
  },
  {
    name: "Egglife Demos",
    brand_id: "7"
  },
  {
    name: "Evo Hemp Demos",
    brand_id: "8"
  },
  {
    name: "Goldthread Demos",
    brand_id: "9"
  },
  {
    name: "Julie's Real Demos",
    brand_id: "10"
  },
  {
    name: "Lavva Demos",
    brand_id: "11"
  },
  {
    name: "Raaka Chocolate Demos",
    brand_id: "12"
  },
  {
    name: "Saso Pepper Co. Audits",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. Demos",
    brand_id: "13"
  },
  {
    name: "Simmer Audits",
    brand_id: "14"
  },
  {
    name: "Simmer Demos",
    brand_id: "14"
  },
  {
    name: "Sir Kensington's - UPC Change Campaign",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's Demos",
    brand_id: "15"
  },
  {
    name: "Snow Monkey Demos",
    brand_id: "16"
  },
  {
    name: "The Jackfruit Company Demos",
    brand_id: "17"
  },
  {
    name: "Tio Gazpacho Demos",
    brand_id: "18"
  },
  {
    name: "Tony's Chocolonely Demos",
    brand_id: "19"
  },
  {
    name: "Whisked Demos",
    brand_id: "20"
  }
];

const seedCampaigns = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaigns;
