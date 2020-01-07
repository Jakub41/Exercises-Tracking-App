// Winston config
// ToDo a config for handle ENV VAR
module.exports = {
    loggly: {
        token: process.env.LOG_TOKEN,
        subdomain: process.env.SUBDOMAIN,
        tags: ["Winston-NodeJS"],
        json: true
    },
    server: {
        port: process.env.PORT,
        url: process.env.API_URL,
    },
    db: {
        port: process.env.DB_PORT,
        url: process.env.DB_URL,
    },
};
