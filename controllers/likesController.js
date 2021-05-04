const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    db.Likes
      .create({
        GameID: req.body.id,  
      })
      .then(() => {
        console.log("db.Likes ==", db.Likes)
        res.send("likes.db");
      })
      .catch((err) => {
        console.log("GAME OVER MAN -", err);
        res.status(401).json(err);
      });
  },
  findAll: function (req, res) {
    db.Likes.findAll({
      include: [db.userID],
    }).then(function (dbLikes) {
      res.json(dbLikes);
    });
  },
};
