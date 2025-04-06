const loginService = require("./login_service");
const sendResponse = require("../../handlers/response_handler");
const APIError = require('../../utils/api_error');

exports.validCustomer = async (req, res, next) => {
    try {
    const { customer } = req.query;
    const status = await loginService.isValidCustomer(customer);
    return sendResponse(res, status, true);
    } 
    catch (err) {
    throw new APIError('Customer not found', 404);
    }
    };