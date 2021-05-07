const db = require("../models");
const axios = require('axios');

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
      });
  },

  addGameToUser: function (gameData, userID) {
    console.log("userID in addGametoUser", userID);
    return db.User.findOne({ _id: userID })
      .then((dbUser) => {
        {
          dbUser.games.map((game) => game.id).includes(gameData.id)
            ? dbUser.save()
            : dbUser.games.push(gameData);
          console.log("DB-USER =>", dbUser);
          return dbUser.save();
        }
      })
      // .then((dbModel, res) => {
      //   console.log("dbModel from addGametoUser", dbModel);
      //   res.send(dbModel);
      // })
      .catch((err) => console.log("error in addGameToUser", err));
  },

  deleteGameFromUser: function (gameData, userID) {
    console.log("userID in addGametoUser", userID);
    return db.User.findById({ _id: UserID })
      .then((dbUser) => {
        let savedGames = dbUser.games.map((game) => game.id);
        {
          !savedGames.includes(gameData.id)
            ? console.log("GAME NOT FOUND")
            : dbUser.games.remove();
        }
        console.log("DB-USER =>", dbUser);
        return dbUser.save();
      })
      .then((dbModel) => {
        console.log("dbModel from addGametoUser", dbModel);
        res.send(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  getAllGames: function (req, res) {
    axios.get(`https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100`)
    .then((response) => res.json(response.data))
    .catch(err => console.log(err));
  },

  // getConsoleGames: async function (req, res) {
  //   console.log("PlatformData inside getConsoleGames", req);
  //   await axios.get(`https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100&platforms=${req.id}`)
  //   .then(console.log("req.id ==", req.id))
  //   .then((response) => res.json(response.data))
  //   .catch(err => console.log(err));
  // },

    // getUserGames: function (userID, res) {
  //   console.log('userID ingetUserGames controller', userID)
  //   return ( 
  //     db.User.findOne({ _id: userID })
  //     .then((dbUser) => console.log("dbModel", dbUser))
  //     .then((dbUser) => res.json(dbUser.games))
  //     .catch((err) => res.status(422).json(err))
  //   )
  // },
};
