const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const platformController = require("../../controllers/platformController");
const genreController = require("../../controllers/genreController");
const passport = require("../../config/passport");

// Matches with "/api/signup"
router.post("/signup", usersController.create)


router.post("/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });  
});
router.post("/platform", platformController.create)
router.post("/genre", genreController.create)

module.exports = router;