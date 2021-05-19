const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../passport");

// Matches with "/api/users/signup"
router.post("/signup", usersController.create);

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("logged in - req.user", req.user);
  let userInfo = {
    email: req.user.email,
    password: req.user.password,
  };
  res.send(userInfo);
}); 

router.get("/logout", (req, res) => {
  console.log("router.get logout route");
  req.session.destroy();
  req.logout();
  res.redirect("/");
});

router.get("/auth", (req, res) => {
  res.send(req.user?.id);
});

module.exports = router;
