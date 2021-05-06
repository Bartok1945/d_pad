  
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
    return axios.get(`https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100&platforms=${query}`)
  },

  getAllGames: function() {
    return axios.get(`https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100`)
  },

  addGame: function (gameData) {
    return axios.post("/api/users/game/", gameData);
  },

  removeGame: function (gameData) {
    return axios.delete("/api/users/game/", gameData);
  },

  userLogout: function () {
    return axios.get('/api/users/logout/');
  },

  getUser: function () {
    return axios.get("/api/users/auth/");
  }
};