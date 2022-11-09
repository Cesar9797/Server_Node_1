const db = require('../utils/database');

const { DataTypes } = require('sequelize');

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nameuser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Users;