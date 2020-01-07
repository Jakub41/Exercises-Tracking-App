// URL
const { server } = require("../config/config");
// Express Lib
const express = require("express");
// Routes lib
const router = express.Router();

// Defining the Index Routers
router.use(server.url + "exercises", require("./exercises"));
router.use(server.url + "users", require("./users"));

// Exporting the Index Router
module.exports = router;
