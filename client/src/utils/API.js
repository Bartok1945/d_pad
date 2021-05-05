  
import axios from "axios";

export default {
  // Adding new user credentials to DB
  userSignup: function (userData) {
    return axios.post("/api/users/signup/", userData);
  },

  userLogin: function (userData) {
    return axios.post("/api/users/login/", userData);
  },

  getConsoleGames: function(query) {
    return axios.get(`https://api.rawg.io/api/games?key=5d1684169bcc4a8499314bf0b87bd008&language=eng&page_size=300&platforms=${query}`)
  },

  getAllGames: function() {
    return axios.get(`https://api.rawg.io/api/games?key=5d1684169bcc4a8499314bf0b87bd008&language=eng&page_size=300`)
  },

  addGame: function (gameData) {
    return axios.post("/api/users/game/", gameData);
  },

  removeGame: function (gameData) {
    return axios.delete("/api/users/game/", gameData);
  },
};