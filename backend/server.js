// Config of the app - ENV
const config = require("./src/config/config");

// Requiring libs
const express = require("express");
const listEndpoints = require("express-list-endpoints");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./src/logging/logger");

const app = express();
const port = config.server.port || 5000;

app.use(cors());
app.use(express.json());

// Main Routing
app.use(require("./src/routes/index.routes"));

// Morgan streams to Winston instead of directly to console
// Showing logs on Loggly tail board online
app.use(morgan("combined", { stream: logger.stream }));

app.use((req, res) => {
    res.status(200).send({
        route: req.originalUrl,
        status: 200,
        message: "root"
    });
});

// Endpoints list
console.log(listEndpoints(app));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    // Log when server starts
    logger.info(`Listening on port: ${port}`);
});
