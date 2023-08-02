const router = require("express").Router();
const { Car, User, Bid } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const dbCarData = await Car.findAll({
      where: {
        user_id: req.session.user_id,
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
          model: Bid,
          attributes: ["id", "bid_price", "car_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const cars = dbCarData.map((car) => car.get({ plain: true }));
    res.render("profile", { cars, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const dbCarData = await Car.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id, 
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
          model: Bid,
          attributes: ["id", "bid_price", "car_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!dbCarData) {
      res.status(404).json({ message: "No car found with this id" });
      return;
    }

    const car = dbCarData.get({ plain: true });
    res.render("editcar", { car, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/edituser", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      },
    });

    if (!dbUserData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }

    const user = dbUserData.get({ plain: true });
    res.render("editUser", { user, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
