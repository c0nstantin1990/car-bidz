const sequelize = require('../config/connection');
const { User, Cars } = require('../models');

const userData = require('../seeds/userData.json')
const carsData = require('../seeds/carsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const cars of carsData) {
        await Cars.create({
            ...cars,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();