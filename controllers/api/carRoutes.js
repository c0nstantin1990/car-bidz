const router = require("express").Router();
const { Cars } = require("../../models");
const withAuth = require("../../utils/auth");

// Route for creating a new car
router.post("/", withAuth, async (req, res) => {
  try {
    const newCarData = {
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price,
      user_id: req.session.user_id,
      image_url: req.body.image_url,
    };

    const newCar = await Cars.create(newCarData);

    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Cars.findByPk(carId, { include: "user" });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
