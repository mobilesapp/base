const express = require("express");
const initController = require("./init_controller");
const router = express.Router();

/**
 * @swagger
 * /heartbeat:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/heartbeat", initController.heartBeat);

module.exports = router;