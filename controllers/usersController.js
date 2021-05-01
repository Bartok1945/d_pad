const db = require("../models");

// Defining methods for the usersController
module.exports = {
  create: function(req, res) {
    db.User
    .create({
        email: req.body.email,
        password: req.body.password,
      })
        .then(() => {
            console.log("db.User ==", db.User)
            res.status(200).send('SUCCESS');
        })
        .catch((err) => {
          console.log("Error signing Up -", err);
          res.status(401).json(err);
        });
  },
};
