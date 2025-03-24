const Customer = require("./customer");
exports.createUser = (custData) => {
    return Customer.create(custData);
};