const router = require("express").Router();
require("../config/connection");
const { Car, User, Bid } = require("../models");

router.get("/", (req, res) => {
  Car.findAll({
    attributes: [
      "id",
      "make",
      "model",
      "year",
      "price",
      "start_bid",
      "image_url",
      "created_at",
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Bid,
        attributes: ["id", "bid_price", "car_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbCarData) => {
      const cars = dbCarData.map((car) => car.get({ plain: true }));
      res.render("homepage", {
        cars,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/car/:id", (req, res) => {
  Car.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "make",
      "model",
      "year",
      "price",
      "start_bid",
      "image_url",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Bid,
        attributes: ["id", "bid_price", "car_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbCarData) => {
      if (!dbCarData) {
        res.status(404).json({ message: "No car found with this id" });
        return;
      }
      const car = dbCarData.get({ plain: true });





      
      // const highestBid = Math.max(car.bids.bid_price)
      // console.log(car.bids.split(""));
      // console.log(car.bids)
      const bidArray = [];
      for (var i = 0; i < car.bids.length; i++) {
        bidArray.push(car.bids[i].bid_price);
      }
      // const highestBid = Math.max(...bidArray); // insert this array as , deliniated  
      const highestBid = {
        greatestBid: Math.max(...bidArray)
      }
      console.log(highestBid)







      res.render("singleCar", {
        car: car,
        // highestBid: highestBid,
        car,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
