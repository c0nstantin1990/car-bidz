const router = require("express").Router();
const userRoutes = require("./userRoutes");
const carRoutes = require("./carRoutes")

router.use("/users", userRoutes);
//added car routes
router.use("/cars", carRoutes);

module.exports = router;
