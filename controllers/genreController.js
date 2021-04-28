module.exports = {
    create: function (req, res) {
        db.Genre
            .create({
                Action: req.body.Action,
                Adventure: req.body.Adventure,
                RPG: req.body.RPG,
                Shooter: req.body.Shooter,
                Strategy: req.body.Strategy,
                Sports: req.body.Sports

            })
            .then(() => {
                console.log("db.Genre ==", db.Genre)
            })
            .catch((err) => {
                console.log("GAME OVER MAN -", err);
                res.status(401).json(err);
            });
    },
};