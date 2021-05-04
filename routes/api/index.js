const router = require("express").Router();
const userRoutes = require("./users");

// everything is on /api

router.use("/users", userRoutes);

module.exports = router;