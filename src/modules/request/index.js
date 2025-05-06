const express = require("express");
const reqController = require("./request_controller");
const router = express.Router();

/**
* @swagger
* components:
*   schemas:
*     Request:
*       type: object
*       properties:
*         customerId:
*           type: string
*         requestDesc:
*           type: string
*         createdAt:
*           type: string
*           format: date-time
*         requestDetail:
*           type: array
*           items:
*              $ref: '#/components/schemas/requestDetail'
*         requestContact:
*           type: array
*           items:
*              $ref: '#/components/schemas/requestContact'
*
*     requestDetail:
*           type: object
*           properties:
*             additionalInfo:
*               type: string
* 
*     requestContact:
*           type: object
*           properties:
*             phoneNo:
*               type: string
*             location:
*               type: string   
*/

/**
* @swagger
* /api/request/create-request:
*   post:
*     summary: Create new request
*     tags: [Request]
*     requestBody:
*       required: true
*       content:
*           application/json:
*               schema:
*                    $ref: '#/components/schemas/Request'
*     responses:
*       201:
*         description: request created
*/
router.post("/create-request", reqController.creatRequest);

module.exports = router;