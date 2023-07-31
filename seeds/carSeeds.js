const { Car } = require("../models");

const carData = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2012,
        price: 15000,
        start_bid: 0,
        image_url: "https://img2.carmax.com/assets/24290695/hero.jpg?width=300",
        user_id: 1,
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2020,
        price: 26000,
        start_bid: 0,
        image_url: "https://img2.carmax.com/assets/24491152/hero.jpg?width=300",
        user_id: 2,
    },
    {
        make: "Ford",
        model: "Fusion",
        year: 2022,
        price: 15000,
        start_bid: 0,
        image_url: "https://img2.carmax.com/assets/24719888/hero.jpg?width=300",
        user_id: 3,
    },
    {
        make: "BMW",
        model: "X5",
        year: 2021,
        price: 53000,
        start_bid: 0,
        image_url: "https://img2.carmax.com/assets/24291228/hero.jpg?width=300",
        user_id: 4,
    },
    {
        make: "Mercedes",
        model: "EQB 250",
        year: 2023,
        price: 54998,
        start_bid: 0,
        image_url: "https://img2.carmax.com/assets/24328878/hero.jpg?width=300",
        user_id: 5,
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        year: 2022,
        price: 41000,
        start_bid: 0,
        image_url: "https://img2.carmax.com/assets/24447793/hero.jpg?width=300",
        user_id: 5,
    },
];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;