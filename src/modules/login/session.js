const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util");

const Session = sequelize.define(
    "session",
    {
        contactId: {
            type: DataTypes.INTEGER,
            field: 'login_id',
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        sessionId: {
            type: DataTypes.INTEGER,
            field: 'session_id',
            allowNull: false,
        },
        otp: {
            type: DataTypes.INTEGER,
            field: 'otp',
            allowNull: false,
        },
        expiredAt: {
            type: DataTypes.DATE,
            field: 'expired_at',
            allowNull: false,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            field: 'is_verified',
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        userType: {
            type: DataTypes.STRING(45),
            field: 'user_type',
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
        tableName: 'session',
        timestamps: false
    }
);
module.exports = Session;