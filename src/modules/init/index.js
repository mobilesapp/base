const express = require("express");
const initController = require("./init_controller");
const router = express.Router();

/**
 * @swagger
 * /api/heartbeat:
 *   get:
 *     summary: Returns health message
 *     tags: [Heatbeat]
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/heartbeat", initController.heartBeat);

module.exports = router;