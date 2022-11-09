const Tasks = require('../models/tasks.models');
const TaskCategories = require('../models/taskcategories.models');
const Categories = require('../models/categories.models');

class TaskServices {
  static async getAll() {
    try {
      const result = await Tasks.findAll({attributes: ['id', 'title', 'description', 'isComplete']});
      return result; 
    } catch (error) {
      throw error;
    }
  }

  static async getTaskJoinCategories(id) {
    try {
      const result = await Tasks.findOne({
        where: {id},
        attributes: ['id', 'title'],
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
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async postData(data) {
    try {
      const result = await Tasks.create(data);
      return {message: "Task Added"}
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TaskServices;