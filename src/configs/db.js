require("dotenv").config();
const config = {
    development: {
        username: "avnadmin",
        password: "AVNS_aGFK4Y30AEpMCjnoGg_",
        database: "mydb",
        host: "scluster1-serviceapp2025-0354.h.aivencloud.com",
        port: 24066,
        dialect: "mysql",
        logging: false,
    },
    production: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: 3306,
        dialect: "mysql",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            connectionTimeoutMillis: 5000,
            idleTimeoutMillis: 30000,
            requestTimeoutMillis: 15000,
        },
    },
};
module.exports = config;