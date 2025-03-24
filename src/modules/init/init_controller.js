const initService = require("./init_service");

/**
 * @swagger
 * /api/heartbeat:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
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