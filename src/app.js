let express = require('express')
const { specs, swaggerUi } = require('./swagger');
const cors = require("cors");
const app = express();
const initRoutes = require("./modules/init"); // Import the user routes          
app.use(express.json());         
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api", initRoutes);
module.exports = app;