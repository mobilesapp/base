const express = require("express");
const custController = require("./cust_controller");
const router = express.Router();


router.post("/create-user", custController.creatUser);

module.exports = router;