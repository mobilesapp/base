const reqService = require("./request_service");
const sendResponse = require("../../handlers/response_handler");

exports.creatRequest = async (req, res, next) => {
    try {
        const reqData = req.body;
        const { httpStatus , reqId } = await reqService.createRequest(reqData);
        return sendResponse(res, httpStatus, true, "Request created successfully", reqId);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ status: "error", message: err.message });
    }
};