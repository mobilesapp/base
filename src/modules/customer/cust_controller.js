const custService = require("./cust_service");

exports.creatCustomer = async (req, res, next) => {
    try {
    const custData = req.body;
    const newUser = await custService.createUser(custData);
    res.status(200).json({
    status: "success",
    message: "User created successfully.",
    data: {
    newUser,
    },
    });
    } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: err.message});
    }
    };