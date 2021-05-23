// seed functions
const seedDemos = require('./demoSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedDemos();
  console.log('\n----- DEMOS SEEDED -----\n');

  process.exit(0);
};

seedAll();