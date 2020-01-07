// Requiring libs
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./src/logging/logger");
// ToDo ENV will be put under config
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// Morgan streams to Winston instead of directly to console
app.use(morgan("combined", { stream: logger.stream }));

app.use((req, res) => {
    res.status(200).send(req.originalUrl);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    // Log when server starts
    logger.info(`Listening on port: ${port}`);
});
