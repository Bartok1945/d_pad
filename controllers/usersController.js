const db = require("../models");
const axios = require("axios");

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
};
