const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util"); 

const Customer = sequelize.define(
    "customer",
    {
    phoneNo: {
    type: DataTypes.INTEGER,
    field: 'phone_no',
    primaryKey: true,
    allowNull: false,
    autoIncrement: false,
    },
    firstName: {
    type: DataTypes.STRING(45),
    field: 'first_name',
    allowNull: false,
    },
    lastName: {
    type: DataTypes.STRING(45),
    field: 'last_name',
    allowNull: false,
    },
    email: {
    type: DataTypes.STRING(45),
    allowNull: true,
    },
    customerId: {
    type: DataTypes.STRING(45),
    field: 'customer_id',
    allowNull: true,
    },
    createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
        },
    },
    {
    freezeTableName: true,
    tableName: 'customer'
    }
    );
    module.exports = User;