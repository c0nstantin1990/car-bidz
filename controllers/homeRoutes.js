const router = require("express").Router();

router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/profile", (req, res) => {
  // const users = User.findAll({})
  
  res.render("profile", {  logged_in: req.session.logged_in });
});

module.exports = router;
