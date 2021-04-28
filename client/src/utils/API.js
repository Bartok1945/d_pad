import axios from "axios";

export default {
  // Adding new user credentials to DB
  userSignup: function (userData) {
    return axios.post("/api/signup/", userData);
  },
  // Adding new user credentials to DB
  userLogin: function (userData) {
    return axios.post("/api/login/", userData);
  },
};
