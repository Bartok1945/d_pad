const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

// Matches with "/api/signup"
router.post("/signup", usersController.create)


// router.post("/login", passport.authenticate("local"), (req, res, next) => {
//     // Sending back a password, even a hashed password, isn't a good idea
//     res.json({
//       email: req.user.email,
//       id: req.user.id,
//     });  
// });

router.post("/login", (req, res, next) => {
  // Sending back a password, even a hashed password, isn't a good idea
  console.log("REQ.BODY ==", req.body)
  next();
},
passport.authenticate("local"), 
(req, res) => {
  console.log("logged in - req.user", req.user);
  let userInfo = {
    email: req.user.email,
    password: req.user.password,
  };
  res.send(userInfo);
});


module.exports = router;