const Customer = require("./customer");
exports.createUser = (userData) => {
    return Customer.create(userData);
};