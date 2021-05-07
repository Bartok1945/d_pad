const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
  function (email, password, done) {
    User.findOne({ email: email }, (err, userMatch) => {
      if (err) {
        return done(err);
      }
      if (!userMatch) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (!userMatch.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, userMatch);
    });
  },
// this can be called on the get request
// checks if user is loggedIn
  function isLoggedIn(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect("/homepage");
    }
  }
);

module.exports = strategy;
