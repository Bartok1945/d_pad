const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../passport");

// Matches with "/api/users/signup"
router.post("/signup", usersController.create);


router.post("/login", passport.authenticate("local"), (req, res)  => {
    console.log("logged in - req.user", req.user);
    let userInfo = {
      email: req.user.email,
      password: req.user.password,
    };
    res.send(userInfo);
  }
);

router.post("/game", (req, res) => {
  let gameData = {
    id: req.body.id,
    title: req.body.title,
  };
  usersController.addGameToUser(gameData, req.user.id)
  .then(() => res.send(gameData))
  .catch((err) => console.log("ERROR IN add /game API ROUTE =>", err))
 }
);

router.delete("/game", (req, res) => {
  let gameData = {
    id: req.body.id,
    title: req.body.title,
  };
  usersController.removeGameFromUser(gameData, req.user.id)
  .then(() => res.send(gameData))
  .catch((err) => console.log("ERROR IN remove /game API ROUTE =>", err))
 }
);

module.exports = router;
