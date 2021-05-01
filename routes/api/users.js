const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const platformController = require("../../controllers/platformController");
const passport = require("../../config/passport");

// Matches with "/api/signup"
router.post("/signup", usersController.create)


router.post("/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
});

router.post("/platforms", passport.authenticate("local"), platformController.create);



module.exports = router;