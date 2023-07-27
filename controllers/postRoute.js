//post.js
// cars post.js runs post fetch in cars routes 
//routes
const router = require('express').Router();
const { Cars } = require("../../models");

// base URL of this file is localhost:3001/api/cars

router.post('/', async (req, res) => {
    try {
        const itemId = await (req.body.id);
        const itemMake = 

    } catch (err) {
        res.status(500).json.(err);
    }
});

module.exports = router
