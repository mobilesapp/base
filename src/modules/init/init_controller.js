const initService = require("./init_service");

exports.heartBeat = async (req, res, next) => {
    try {
    const heartBeatRes = await initService.isValidHeartBeat();
    res.status(200).json({
    status: "success",
    message: "Success Validation",
    data: {
    heartBeatRes,
    },
    });
    } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Error Validating Heart Beat." });
    }
    };