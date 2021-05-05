const db = require("../models");

// Defining methods for the usersController
module.exports = {
  create: function (req, res) {
    console.log("CREATE from UserConstroller");
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => {
        req.login(user, function (err) {
          console.log("INSIDE REQ.LOGIN ==", user);
          if (err) {
            return console.log("ERROR ->", err);
          }
          return res.json(user);
        });
      })
      .catch((err) => {
        console.log("Error signing Up -", err);
        res.status(401).json(err);
      });
  },

  addGameToUser: function (gameData, userID) {
    console.log("userID in addGametoUser", userID)
    return db.User.findOne({ _id: userID })
      .then((dbUser) => {
        {dbUser.games.map((game) => game.id).includes(gameData.id) ? dbUser.save() : 
        dbUser.games.push(gameData);
        console.log("DB-USER =>", dbUser)
        return dbUser.save();
      }})
      .then((dbModel) => {
        console.log("dbModel from addGametoUser", dbModel)
        res.json(dbModel)
      })
      .catch((err) => res.status(422).json(err));
  },

  removeGameFromUser: function (gameData, userID) {
    console.log("userID in addGametoUser", userID)
    return db.User.findOne({ _id: userID })
      .then((dbUser) => {
        let savedGames = dbUser.games.map((game) => game.id);
        {!savedGames.includes(gameData.id) ? console.log("GAME NOT FOUND") :
          dbUser.games.remove()
        }
        console.log("DB-USER =>", dbUser)
        return dbUser.save();
      })
      .then((dbModel) => {
        console.log("dbModel from addGametoUser", dbModel)
        res.json(dbModel)
      })
      .catch((err) => res.status(422).json(err));
  },
};
