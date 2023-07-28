const router = require("express").Router();
const { Cars, User } = require("../models")
router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/profile", async (req, res) => {
  const userData = await User.findOne({ 
    where: {
      id: req.session.user_id
    },
    include: [Cars]
  })
  const user = userData.get({ plain: true })
  res.render("profile", { user, logged_in: req.session.logged_in });
});

module.exports = router;
