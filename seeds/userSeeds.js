const { User } = require("../models");

const userData = [
    {
        username: "user1",
        password: "user12345",
        email: "email1@email.com",
    },
    {
        username: "user2",
        password: "user22345",
        email: "email2@email.com",
    },
    {
        username: "user3",
        password: "user3245",
        email: "email3@email.com",
    },
    {
        username: "user4",
        password: "user4245",
        email: "email4@email.com",
    },
    {
        username: "user5",
        password: "user5245",
        email: "email5@email.com",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;