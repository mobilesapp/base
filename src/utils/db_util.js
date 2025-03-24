const Sequelize = require("sequelize");
const dbConfig = require("../configs/db.js"); 

process.env.NODE_ENV = 'development';
const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);
sequelize
.sync()
.then(() => {
console.log("✔ Database connected successfully.");
})
.catch((err) => {
console.error("✘ Error connecting to the database:", err);
});
module.exports = sequelize;