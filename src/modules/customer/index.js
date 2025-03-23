const express = require("express");
const custController = require("./cust_controller");
const router = express.Router();


router.get("/create-user", custController.creatUser);

module.exports = router;