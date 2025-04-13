const httpConstants = require('http2').constants;
const CacheUtil = require("../../utils/in_mem_cache_util");
const OtpUtil = require("../../utils/otp_util");
const Session = require("./session");

exports.isValidCustomer = (customer) => {
    const customerId = CacheUtil.getCache(customer);
    let httpStatus = httpConstants.HTTP_STATUS_NOT_FOUND;
    if (!customerId) {
        return {customerId, httpStatus};
    }
    httpStatus = httpConstants.HTTP_STATUS_OK;
    return {customerId, httpStatus };
};

exports.createOTP = (sessionId , customerId ) => {
    const otp = OtpUtil.generateSecureOTP();
    const expiredAt = new Date(Date.now() + 5 * 60 * 1000); // 5 mins
    const httpStatus = httpConstants.HTTP_STATUS_OK;

    Session.upsert({ // create or update
        sessionId: sessionId,
        otp : otp,
        expiredAt: expiredAt,
        createdAt: Date.now(),
        isVerified: true,
        userType: 'CUSTOMER',
        customerId: customerId
      });

    return {otp, httpStatus};
};