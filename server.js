const express = require("express");
const passport = require("./passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require("express-session");
const cors = require("cors");
const PORT = process.env.PORT || 3001;


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
  })
);

app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// UPDATE THE DATABASE NAME!!
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/<DB_NAME>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
