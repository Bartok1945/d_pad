import axios from "axios";

export default {
  // Adding new user credentials to DB
  userSignup: function (userData) {
    return axios.post("/api/users/signup/", userData);
  },

  userLogin: function (userData) {
    return axios.post("/api/users/login/", userData);
  },

  getUser: function () {
    return axios.get("/api/users/auth/");
  },

  userLogout: function () {
    return axios.get("/api/users/logout/");
  },
};
