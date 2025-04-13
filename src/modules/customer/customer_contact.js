const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util"); 

const CustomerContact = sequelize.define(
    "customer_contact",
    {
    contactId: {
    type: DataTypes.INTEGER,
    field: 'contact_id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    },
    phoneNo: {
    type: DataTypes.INTEGER,
    field: 'phone_no',
    allowNull: false,
    },
    default: {
    type: DataTypes.BOOLEAN,
    field: 'default',
    allowNull: false,
    },
    customerId: {
    type: DataTypes.STRING(100),
    field: 'customer_id',
    allowNull: true,
    },
    },  
    {
    freezeTableName: true,
    tableName: 'customer_contact',
    timestamps: false
    }
    );
    module.exports = CustomerContact;