const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util"); 

const RequestDetail = sequelize.define(
    "request_detail",
    {
    requestDetailId: {
    type: DataTypes.INTEGER,
    field: 'request_detail_id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    },
    additionalInfo: {
    type: DataTypes.STRING(1000),
    field: 'additional_info',
    allowNull: false,
    },
    requestId: {
    type: DataTypes.INTEGER,
    field: 'request_id',
    allowNull: false,
    primaryKey: true,
    },
    },  
    {
    freezeTableName: true,
    tableName: 'request_detail',
    timestamps: false
    }
    );
    module.exports = RequestDetail;