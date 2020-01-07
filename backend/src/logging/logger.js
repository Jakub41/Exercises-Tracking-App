// Requiring libs Loggly & Winston
const Loggly = require("winston-loggly-bulk").Loggly;
const winston = require("winston");
// Loggly config
const config = require("../config/config");

// Creating the logging
const logger = winston.createLogger({
    transports: [
        new Loggly(config.loggly),
        new winston.transports.Console({ level: "info" })
    ]
});
// Logging stream
logger.stream = {
    write: (info) => {
        logger.info(info);
    }
};

module.exports = logger;
