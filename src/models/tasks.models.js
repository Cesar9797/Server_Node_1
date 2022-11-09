const db = require('../utils/database');
const Users = require('../models/users.models');

const { DataTypes } = require('sequelize');

const Tasks = db.define('tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_complete"
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      key: "id",
      model: Users
    },
    field: "user_id"
  }
  
})

module.exports = Tasks;