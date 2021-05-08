  import axios from "axios";

export default {
  // Adding new user credentials to DB
  userSignup: function (userData) {
    return axios.post("/api/users/signup/", userData);
  },

  userLogin: function (userData) {
    return axios.post("/api/users/login/", userData);
  },
  
  // getConsoleGames: function (id) {
  //   console.log("platform inside api rouite")
  //   return axios.get("/api/users/getConsoleGames/" + id)
  // },

  getConsoleGames: function (id) {
      return axios.get(`https://api.rawg.io/api/games?key=d0c84df9f8e946c1a8354306de37078b&language=eng&page_size=100&platforms=${id}`)
  },

  getAllGames: function() {
    return axios.get("/api/users/getAllGames")
  },

  addGame: function (gameData) {
    return axios.post("/api/users/game/", gameData);
  },

  deleteUserGame: function (gameID) {
    return axios.delete("/api/users/game/" + gameID);
  },

  userLogout: function () {
    return axios.get('/api/users/logout/');
  },

  getUser: function () {
    return axios.get("/api/users/auth/");
  },

  getUserGames: function(id) {
    return axios.get("/api/users/" + id);
  }
};