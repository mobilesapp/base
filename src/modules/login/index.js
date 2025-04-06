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
*         name: customer
*         schema:
*           type: string
*         required: false
*         description: Customer Id (e.g., CUST-[DATE]-[RANDOM])
*
*     description: Check if the customer is valid
*     responses:
*       200:
*         description: Successful response
*/
router.get("/valid-customer", loginController.validCustomer);

module.exports = router;