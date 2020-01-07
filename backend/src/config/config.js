require("dotenv").config();

module.exports = {
    // Server setup
    server: {
        port: process.env.PORT,
        url: process.env.API_URL,
    },
    // DB Setup
    db: {
        port: process.env.DB_PORT,
        url: process.env.DB_URL,
    },
    // Winston config with Loggly access
    loggly: {
        token: process.env.LOG_TOKEN,
        subdomain: process.env.SUBDOMAIN,
        tags: ["Winston-NodeJS"],
        json: true
    },

};
