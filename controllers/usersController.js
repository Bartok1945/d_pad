const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => {
        req.login(user, function(err) {
          if (err) { return next(err); }
          return res.redirect('/api/users/login');
        });
      })
      .catch((err) => {
        console.log("Error signing Up -", err);
        res.status(401).json(err);
      });
  },

};
