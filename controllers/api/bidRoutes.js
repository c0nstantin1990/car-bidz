const router = require("express").Router();
const { Bid } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to get all bids
router.get("/", async (req, res) => {
  try {
    const bids = await Bid.findAll();
    res.json(bids);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to create a new bid
router.post("/", withAuth, async (req, res) => {
  try {
    if (req.session) {
      const newBid = await Bid.create({
        bid_price: req.body.bid_price,
        car_id: req.body.car_id,
        user_id: req.session.user_id,
      });
      res.json(newBid);
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Bad request" });
  }
});

// Route to delete a bid by its id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedBid = await Bid.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedBid) {
      res.status(404).json({ message: "No bid found with this id" });
      return;
    }
    res.json(deletedBid);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
