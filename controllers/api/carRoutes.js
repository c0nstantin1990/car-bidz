const router = require("express").Router();
const { User, Car, Bid } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all cars with associated user and bid data
router.get("/", async (req, res) => {
  try {
    const cars = await Car.findAll({
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
    });
    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a specific car by id with associated user and bid data
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findOne({
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
    });

    if (!car) {
      res.status(404).json({ message: "No car found with this id" });
      return;
    }

    res.json(car);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new car
router.post("/", withAuth, async (req, res) => {
  try {
    const newCar = await Car.create({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price,
      start_bid: req.body.start_bid,
      image_url: req.body.image_url,
      user_id: req.session.user_id,
    });
    res.json(newCar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a car by id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedCar = await Car.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedCar[0]) {
      res.status(404).json({ message: "No car found with this id" });
      return;
    }

    res.json(updatedCar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a car by id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedCar = await Car.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedCar) {
      res.status(404).json({ message: "No car found with this id" });
      return;
    }

    res.json(deletedCar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
