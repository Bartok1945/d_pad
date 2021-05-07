const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../passport");

// Matches with "/api/users/signup"
router.post("/signup", usersController.create);


router.post("/login", isLoggedIn, passport.authenticate("local"), (req, res)  => {
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

router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    res.redirect('/');
  console.log("router.get logout route")
})
})

router.get("/auth", (req, res) => {
  res.send(req.user.id)
});

router.get("/getAllGames", usersController.getAllGames)

// router.get("/getConsoleGames/:id", (req, res) => {
//   console.log("req.parsm.id ==", req.params)
//   usersController.getConsoleGames(req.params)
//   .then((res) => res.send(platformData))
//   .catch((err) => console.log("ERROR IN remove /game API ROUTE =>", err))
// })

// router.get("/:id", (req, res) => {
//   usersController.getUserGames(req.params.id)
//   .then((response) => res.send(response.data))
//   .catch((err) => console.log("ERROR IN remove /game API ROUTE =>", err))
// })


module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.user) {
    res.json({
      email: req.user.email,
    })
  } else {
    res.redirect("/");
  }
};
