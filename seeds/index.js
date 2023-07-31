const seedUsers = require("./userSeeds");
const seedCars = require("./carSeeds");
const seedBids = require("./bidSeeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });

    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUsers();

    console.log("\n----- USERS SEEDED -----\n");

    await seedCars();

    console.log("\n----- CARS SEEDED -----\n");

    await seedBids();

    console.log("\n----- BIDS SEEDED -----\n");

    process.exit(0);
};

seedAll();