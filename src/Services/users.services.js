const Users = require('../models/users.models');
const Address = require('../models/addresses.models')
const Tasks = require('../models/tasks.models');
const TaskCategories = require('../models/taskcategories.models');
const Categories = require('../models/categories.models');

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({attributes: ["id", "nameuser", "email"]}); // Select * from Users;
      return result;
    } catch (error) {
      throw(error);
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw(error)
    }
  }

  static async getUserJoinAddress(id) {
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: ['id', 'nameuser'], // Incluyo columnas
        include: {
          model: Address,
          as: 'home',
          attributes: {
            exclude: ['id', 'user_id', 'userId'], // Excluyo columnas
          }
        }
      });
      return result;
    } catch (error) {
        throw(error);
    }
  }

  static async getUserJoinTask (id) {
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: ['id', 'nameuser'],
        include: {
          model: Tasks,
          as: 'todo',
          attributes: {
            exclude: ['id', 'user_id', 'createdAt', 'updatedAt']
          },
          include: {
            model: TaskCategories,
            as: 'categories',
            attributes: ['category_id'],
            include: {
              model: Categories,
              as: 'categories',
              attributes: ['name']
            }
          }
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async get(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserServices;