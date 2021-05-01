const db = require("../models");

// Defining methods for the platformController
module.exports = {
  create: function (req, res) {
    if(!req.user) {
      res.redirect("/")
    }
    db.Console
      .create({
        PS5: req.body.PS5,
        XboxOne: req.body.XboxOne,
        XboxSeries: req.body.XboxSeries,
        PS4: req.body.PS4,
        Switch: req.body.Switch,
        PC: req.body.PC,
        UserId: req.user.id
      })
      .then(() => {
        console.log("db.Platform ==", db.Platform)
        res.send("platform.db");
      })
      .catch((err) => {
        console.log("GAME OVER MAN -", err);
        res.status(401).json(err);
      });
  },
};