const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util"); 

const RequestContact = sequelize.define(
    "request_contact",
    {
    requestContactId: {
    type: DataTypes.INTEGER,
    field: 'request_contact_id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    },
    phoneNo: {
    type: DataTypes.INTEGER,
    field: 'phone_no',
    allowNull: false,
    },
    location: {
    type: DataTypes.STRING(45),
    field: 'location',
    allowNull: false,
    },
    requestId: {
    type: DataTypes.INTEGER,
    field: 'request_id',
    allowNull: true,
    },
    },  
    {
    freezeTableName: true,
    tableName: 'request_contact',
    timestamps: false
    }
    );
    module.exports = RequestContact;