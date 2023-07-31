const { Bid } = require("../models");

const bidData = [
    {
        bid_price: 25000,
        car_id: 3,
        user_id: 1,
    },
    {
        bid_price: 35000,
        car_id: 1,
        user_id: 4,
    },
    {
        bid_price: 45000,
        car_id: 4,
        user_id: 2,
    },
    {
        bid_price: 55000,
        car_id: 2,
        user_id: 3,
    },
    {
        bid_price: 65000,
        car_id: 5,
        user_id: 5,
    },
];

const seedBids = () => Bid.bulkCreate(bidData);

module.exports = seedBids;