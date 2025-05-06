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
    tags: [
      { name: 'Heatbeat', description: 'Testing endpoints' },
      { name: 'Auth', description: 'Authentication endpoints' },
      { name: 'Customer', description: 'Customer management' },
      { name: 'Request', description: 'Request management' },
    ],
  },
  apis: [ 'src/modules/init/*.js','src/modules/customer/*.js' ,'src/modules/login/*.js', 'src/modules/request/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};