const Customer = require("./customer");
const CustomerAddress = require("./customer_address");
const CustomerContact = require("./customer_contact");
const CustUtil = require("../../utils/cust_util");
const CacheUtil = require("../../utils/in_mem_cache_util");
const httpConstants = require('http2').constants;

exports.createUser = (custData) => {
    const custContact= custData.customerContact[0];
    const custAddress = custData.customerAddress[0];
    delete custData['customerAddress'];
    custData.customerId = CustUtil.generateCustomerId();
    custAddress.customerId = custData.customerId;
    custContact.customerId = custData.customerId;

    Customer.create(custData);
    CustomerAddress.create(custAddress);
    CustomerContact.create(custContact);

    CacheUtil.setCache(custContact.phoneNo, custData.customerId);
    return httpConstants.HTTP_STATUS_OK;
};
