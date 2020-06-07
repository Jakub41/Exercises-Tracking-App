// Express
const express = require("express");
// Router
const router = express.Router();
// User model
let User = require("../models/user.model");

router.get("/", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error " + err));
});

router.post("/add", (req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser
        .save()
        .then(() => res.json("User Added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;