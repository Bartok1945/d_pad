
const router = require("express").Router();
const userRoutes = require("./users");

router.use("/api", userRoutes);

module.exports = rout