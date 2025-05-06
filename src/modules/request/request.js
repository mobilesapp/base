const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util");
const RequestContact = require("./request_contact");
const RequestDetail = require("./request_detail");

const Request = sequelize.define(
    "request",
    {
        requestId: {
            type: DataTypes.INTEGER,
            field: 'request_id',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        customerId: {
            type: DataTypes.STRING(100),
            field: 'customer_id',
            allowNull: false,
        },
        requestDesc: {
            type: DataTypes.STRING(1000),
            field: 'request_desc',
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(20),
            field: 'status',
            allowNull: false,
        },
        performedBy: {
            type: DataTypes.STRING(45),
            field: 'performed_by',
            allowNull: true,
        }
    },
    {
        freezeTableName: true,
        tableName: 'request',
        timestamps: false
    }
);

Request.hasMany(RequestContact, { foreignKey: "requestId", onDelete: "CASCADE" });
RequestContact.belongsTo(Request, { foreignKey: "requestId" });

Request.hasMany(RequestDetail, { foreignKey: "requestId", onDelete: "CASCADE" });
RequestDetail.belongsTo(Request, { foreignKey: "requestId" });

module.exports = Request;