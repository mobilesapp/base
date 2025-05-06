const Request = require("./request");
const RequestDetail = require("./request_detail");
const RequestContact = require("./request_contact");
const httpConstants = require('http2').constants;

exports.createRequest = async (reqData) => {
    const requestContact= reqData.requestContact[0];
    const requestDetail = reqData.requestDetail[0];
    const httpStatus = httpConstants.HTTP_STATUS_OK;

    delete reqData['requestDetail'];
    delete reqData['requestContact'];

    requestDetail.customerId = reqData.customerId;
    requestContact.customerId = reqData.customerId;
    reqData.status = 'NEW';

    const newRequest = await Request.create(reqData);
    const reqId = newRequest.requestId;
    requestDetail.requestId = reqId;
    requestContact.requestId = reqId;
    
    RequestDetail.create(requestDetail);
    RequestContact.create(requestContact);

    return {httpStatus, reqId };
};