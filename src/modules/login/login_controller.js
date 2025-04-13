const loginService = require("./login_service");
const sendResponse = require("../../handlers/response_handler");
const APIError = require('../../utils/api_error');


exports.validCustomer = async (req, res, next) => {
    try {
        const { phoneNo } = req.query;
        const { customerId, httpStatus } = await loginService.isValidCustomer(phoneNo);
        return sendResponse(res, httpStatus, true, customerId);
    }
    catch (err) {
        throw new APIError('Customer not found', 404);
    }
};

exports.createOTP = async (req, res, next) => {
    try {
        const sessionData = req.body;
        const { otp , httpStatus } = await loginService.createOTP(sessionData.sessionId, sessionData.customerId);
        return sendResponse(res, httpStatus, true, otp);
    }
    catch (err) {
        throw new APIError('OTP not generated', 500);
    }
};