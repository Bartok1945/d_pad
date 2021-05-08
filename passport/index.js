const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");

passport.serializeUser((user, done) => {
  console.log("SErializeUser was called");
  console.log('raw user object ->', user); // the raw user object
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log("DEserializeUser was called");
  User.findOne({ _id: id }, (err, user) => {
    console.log("======= DESERILAIZE USER CALLED ======");
    console.log(user);
    done(null, user);
  });
});

// ==== Register Strategies ====
passport.use(LocalStrategy);

module.exports = passport;
