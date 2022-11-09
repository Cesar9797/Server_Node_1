const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');

const Address = db.define('addresses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: "id",
      model: Users
    },
    field: "user_id"
  }
}
, {
  timestamps: false,
});

module.exports = Address;