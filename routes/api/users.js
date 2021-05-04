const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const likesController = require("../../controllers/likesController");
const passport = require("../../config/passport");

// Matches with "/api/users/signup"
router.post("/signup", usersController.create);


// /api/users/login
router.post("/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });  
});

router.post("/likes", likesController.create)

router.get('/auth/me', (req,res) => {
  if(req.user){
    res.json(req.user)
  }
  res.json({})
})


module.exports = router;