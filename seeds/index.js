//seed categories
const seedUser = require('./userData');
const seedActivities = require('./activityData');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- user SEEDED -----\n');
  await seedActivities();
  console.log('\n----- activity SEEDED -----\n');
  process.exit(0);
};

seedAll();