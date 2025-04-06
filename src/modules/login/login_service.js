const httpConstants = require('http2').constants;
const CacheUtil = require("../../utils/in_mem_cache_util");

exports.isValidCustomer = ( customer ) => {
    const customerId = CacheUtil.getCache(customer);
    if(!customerId) {
        return httpConstants.HTTP_STATUS_NOT_FOUND;
    }
    return httpConstants.HTTP_STATUS_OK
};