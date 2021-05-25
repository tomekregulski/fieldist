const seedRegions = require('./regionSeeds');
const seedBrands = require('./brandSeeds');
const seedBrandContacts = require('./brandContactSeeds');
const seedProducts = require('./brandSeeds');
const seedReportTemplates = require('./reportTemplateSeeds')
const seedCampaigns = require('./campaignSeeds');
const seedAdmins = require('./adminSeeds');
const seedReps = require('./repSeeds');
const seedVenues = require('./venueSeeds');
const seedDemos = require('./demoSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedRegions();
  console.log('\n----- REGIONS SEEDED -----\n');

  await seedVenues();
  console.log('\n----- VENUES SEEDED -----\n');

  await seedReps();
  console.log('\n----- REPS SEEDED -----\n');

  await seedReportTemplates();
  console.log('\n----- REPORT TEMPLATES SEEDED -----\n');

  await seedAdmins();
  console.log('\n----- ADMINS SEEDED -----\n');
  
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedCampaigns();
  console.log('\n----- CAMPAIGNS SEEDED -----\n');

  await seedBrands();
  console.log('\n----- BRANDS SEEDED -----\n');

  await seedBrandContacts();
  console.log('\n----- BRAND CONTACTS SEEDED -----\n');
  
  await seedDemos();
  console.log('\n----- DEMOS SEEDED -----\n');

  process.exit(0);
};

seedAll();