const db = require("../models");
const axios = require("axios");

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
    // console.log("userID in addGametoUser", userID);
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
      .then((response) => res.json(response.data))
      .catch((err) => console.log("error in addGameToUser", err));
  },

  updateGame: function (gameID, userID) {
    // console.log("userID in updateGame", userID);
    // console.log("gameData in updateGame", gameID);

    return db.User.findOne({ _id: userID })
      .then((dbUser) => {
        let savedGames = dbUser.games.map((game) => game.id);
        console.log("SAVEDGAMES ARRAY ", savedGames);
        if (savedGames.includes(parseInt(gameID.id))) {
          console.log("DB.user inside updateGame", dbUser);
          dbUser.games = dbUser.games.map((game) => {
            if (parseInt(gameID.id) === game.id) {
              game.played = true;
            }
            return game;
          });

          console.log(`dbUSer.games`, dbUser.games);
          return dbUser.save();
        } else {
          console.log(
            "THERE WAS AN ERROR TRYING TO REMOVE A GAME FORM THE USER "
          );
        }
        console.log("DB-USER =>", dbUser);
      })
      .catch((err) => console.log("error in deleteGameFromUser", err));
  },

  getAllGames: function (req, res) {
    axios
      .get(
        `https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100`
      )
      .then((response) => res.json(response.data))
      .catch((err) => console.log(err));
  },

  deleteGameFromUser: function (gameID, userID) {
    console.log("userID in REMOVEGametoUser", userID);
    console.log("gameData in REMOVEGametoUser", gameID);
    return db.User.findOne({ _id: userID })
      .then((dbUser) => {
        let savedGames = dbUser.games.map((game) => game.id);
        console.log("SAVEDGAMES ARRAY ", savedGames);
        if (savedGames.includes(parseInt(gameID.id))) {
          dbUser.games = dbUser.games.filter(
            (game) => game.id !== parseInt(gameID.id)
          );
          console.log(`dbUSer.games`, dbUser.games);
          return dbUser.save();
        } else {
          console.log(
            "THERE WAS AN ERROR TRYING TO REMOVE A GAME FORM THE USER "
          );
        }
        console.log("DB-USER =>", dbUser);
      })
      .catch((err) => console.log("error in deleteGameFromUser", err));
  },

  getAllGames: function (req, res) {
    axios
      .get(
        `https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100`
      )
      .then((response) => res.json(response.data))
      .catch((err) => console.log(err));
  },

  getUserGames: function (userID, res) {
    console.log("userID ingetUserGames controller", JSON.stringify(userID));
    return db.User.findOne({ _id: userID })
      .then((dbUser) => {
        console.log("dbUser", dbUser);
        return dbUser;
      })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.log("ERR in getUserGames", err);
        res.status(422).json(err);
      });
  },

  getConsoleGames: async function (platformID, res) {
    console.log("PlatformData inside getConsoleGames", platformID);
    await axios.get(`https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100&platforms=${platformID}`)
    .then((response) => res.json(response.data))
    .catch(err => console.log(err));
  },
};
