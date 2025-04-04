const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util"); 

const CustomerAddress = sequelize.define(
    "customer_address",
    {
    addressId: {
    type: DataTypes.INTEGER,
    field: 'address_id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    },
    houseNo: {
    type: DataTypes.STRING(45),
    field: 'house_no',
    allowNull: false,
    },
    street: {
    type: DataTypes.STRING(45),
    field: 'street',
    allowNull: false,
    },
    city: {
    type: DataTypes.STRING(45),
    allowNull: true,
    },
    province: {
    type: DataTypes.STRING(45),
    allowNull: true,
    },
    postalCode: {
        type: DataTypes.STRING(45),
        field: 'postal_code',
        allowNull: true,
    },
    customerId: {
        type: DataTypes.STRING(100),
        field: 'customer_id',
        allowNull: true,
    },
    },
    
    {
    freezeTableName: true,
    tableName: 'customer_address',
    timestamps: false
    }
    );
    module.exports = CustomerAddress;