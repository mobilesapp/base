const express = require("express");
const initController = require("./init_controller");
const router = express.Router();
router.get("/heartbeat", initController.heartBeat);
module.exports = router;