const express = require("express");
const passport = require("./passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require("express-session");
const cors = require("cors");
// const MongoStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3001;
// const connection = require('./models')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
app.use(
  session({
    secret: "fraggle-rock", //random string to make the hash that is generated secure
    // store: new MongoStore({
    //   mongooseConnection: mongoose.connection,
    //   collection: "sessions",
    // }),
    resave: false, //required
    saveUninitialized: false, //required
    // proxy: true,
    // cookie: {
    //   secure: true,
    // },
  })
);

app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// app.get("/logout", function (req, res) {
//   req.logout();
//   req.session.destroy();
//   console.log("Logout from route in server.js")
//   res.redirect("/");
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dpad_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
