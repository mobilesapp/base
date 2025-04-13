const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db_util"); 
const CustomerContact = require("./customer_contact"); 
const CustomerAddress = require("./customer_address"); 

const Customer = sequelize.define(
    "customer",
    {
    customerId: {
    type: DataTypes.STRING(100),
    field: 'customer_id',
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

    Customer.hasMany(CustomerAddress, { foreignKey: "customerId", onDelete: "CASCADE" });
    CustomerAddress.belongsTo(Customer, { foreignKey: "customerId" });

    Customer.hasMany(CustomerContact, { foreignKey: "customerId", onDelete: "CASCADE" });
    CustomerContact.belongsTo(Customer, { foreignKey: "customerId" });

    module.exports = Customer;