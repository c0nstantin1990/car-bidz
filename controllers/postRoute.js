//post.js
// cars post.js runs post fetch in cars routes 
//routes
const router = require('express').Router();
const { Cars } = require("../../models");

// base URL of this file is localhost:3001/api/cars
const itemCreated = await Cars.create({
itemId = (req.body.id),
itemMake = (req.body.make),
itemModel = (req.body.model),
itemYear = (req.body.year),
itemPrice = (req.body.price),
itemCreate = (req.body.date_created),
itemImg = (req.body.image_url)
});

router.post('/', async (req, res) => {
    try {
        const newItemCreated = itemCreated

    res.status(200)json.(newItemCreated);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/', async (req, res) => {
    try {
      const itemData = await Cars.destroy({
        where: itemCreated,
      });
  
      if (!itemData) {
        res.status(400).json({ message: 'No posting found!' });
        return;
      }
  
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router
