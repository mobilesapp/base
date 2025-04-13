const express = require("express");
const loginController = require("./login_controller");
const router = express.Router();

/**
* @swagger
* /api/login/valid-customer:
*   get:
*     summary: Check Valid Customer
*     tags: [Auth]
*     parameters:
*       - in: query
*         name: phoneNo
*         schema:
*           type: string
*         required: false
*         description: Phone No (e.g., 07XXXXXXXX)
*
*     description: Check if the customer is valid
*     responses:
*       200:
*         description: Successful response
*/
router.get("/valid-customer", loginController.validCustomer);

/**
* @swagger
* components:
*   schemas:
*     Otp:
*       type: object
*       properties:
*         sessionId:
*           type: string
*         customerId:
*           type: string
*/

/**
* @swagger
* /api/login/create-otp:
*   post:
*     summary: Create New OTP
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*           application/json:
*               schema:
*                    $ref: '#/components/schemas/Otp'
*     responses:
*       201:
*         description: otp created
*/
router.post("/create-otp", loginController.createOTP);

module.exports = router;