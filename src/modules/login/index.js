const express = require("express");
const loginController = require("./login_controller");
const router = express.Router();

/**
* @swagger
* /api/login/valid-customer:
*   get:
*     summary: Check Valid Customer
*     parameters:
*       - in: query
*       - customer: customer
*     schema:
*       type: string
*     requered: true
*     description: Check if the customer is valid
*     responses:
*       200:
*         description: Successful response
*/
router.get("/valid-customer", loginController.validCustomer);

module.exports = router;