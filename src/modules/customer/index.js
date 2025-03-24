const express = require("express");
const custController = require("./cust_controller");
const router = express.Router();

/**
* @swagger
* components:
*   schemas:
*     Customer:
*       type: object
*       properties:
*         phoneNo:
*           type: integer
*         firstName:
*           type: string
*         lastName:
*           type: string
*         email:
*           type: string
*         customerId:
*           type: string
*         createdAt:
*           type: string
*           format: date-time
*         updatedAt:
*           type: string
*           format: date-time
*/

/**
* @swagger
* /api/customer/create-customer:
*   post:
*     summary: Create new customer
*     requestBody:
*       required: true
*       content:
*           application/json:
*               schema:
*                    $ref: '#/components/schemas/Customer'
*     responses:
*       201:
*         description: customer created
*/
router.post("/create-customer", custController.creatCustomer);

module.exports = router;