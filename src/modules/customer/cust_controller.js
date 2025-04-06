const custService = require("./cust_service");
const sendResponse = require("../../handlers/response_handler");

exports.creatCustomer = async (req, res, next) => {
    try {
    const custData = req.body;
    const status = await custService.createUser(custData);
    return sendResponse(res, status, true, "Customer created successfully", custData.customerId);
    } 
    catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: err.message});
    }
    };