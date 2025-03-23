const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util"); 

const Customer = sequelize.define(
    "customer",
    {
    phoneNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: false,
    },
    firstName: {
    type: DataTypes.STRING(45),
    allowNull: false,
    },
    lastName: {
    type: DataTypes.STRING(45),
    allowNull: false,
    },
    email: {
    type: DataTypes.STRING(45),
    allowNull: true,
    },
    customerId: {
    type: DataTypes.STRING(45),
    allowNull: true,
    },
    createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    },
    },
    {
    paranoid: true, // Enables soft deletes
    }
    );
    module.exports = User;