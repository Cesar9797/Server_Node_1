// Este archivo nos ayuda a gestionar la base de datos
// sequelize init -> config

const {Sequelize} = require("sequelize");
require('dotenv').config();

const db = new Sequelize(
  {
    database: 'to_do_list_2',
    username: 'postgres',
    host: 'localhost',
    port: '5432',
    password: 'root',
    dialect: 'postgres'
  }
)

module.exports = db;