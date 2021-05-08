const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
    // passwordField: 'password',
  },
  function (email, password, done) {
    console.log("Local Strategy running!")
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      console.log("Local Strategy done!")
      return done(null, user);
    });
  },
// this can be called on the get request
// checks if user is loggedIn
//   function isLoggedIn(req, res, next) {
//     if (req.user) {
//       next();
//     } else {
//       res.redirect("/homepage");
//     }
//   }
);

module.exports = strategy;




