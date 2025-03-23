const custService = require("./cust_service");

exports.creatUser = async (req, res, next) => {
    try {
    const userData = req.body;
    const newUser = await custService.createUser(userData);
    res.status(200).json({
    status: "success",
    message: "User created successfully.",
    data: {
    newUser,
    },
    });
    } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Error creating user." });
    }
    };