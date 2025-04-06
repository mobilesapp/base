// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mobile Service App API',
      version: '1.0.0',
      description: 'Swagger documentation of MSAPP',
    },
  },
  apis: [ 'src/modules/init/*.js','src/modules/customer/*.js' ,'src/modules/login/*.js' ], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};