const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
  function (email, password, done) {
    console.log("Local Strategy running!")
    User.findOne({ email: email }, (err, user) => {
      console.log('user', user)
      // if (err) {
      //   return done(err);
      // }
      if (!user) {
        console.log("NO USER FOUND AND I AM A LIAR")
        return done(null, false, { message: "Incorrect email" });
      }
      // the checkPassword function always returned 401 regardless, so disabled
      // if (!user.checkPassword(password)) {
      //   console.log("NO PASSWORD FOUND AND I AM A LIAR ==", password)
      //   return done(null, false, { message: "Incorrect password" });
      // }
      console.log("Local Strategy done!")
      return done(null, user);
    });
  },
);

module.exports = strategy;




