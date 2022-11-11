const Tasks = require('../models/tasks.models');
const TaskCategories = require('../models/taskcategories.models');
const Categories = require('../models/categories.models');

class TaskServices {
  static async getByUserId(userId) {
    try {
      const result = await Tasks.findAll({
        where: {userId},
        attributes: ['id', 'title', 'description', 'isComplete'],
        include: {
          model: TaskCategories,
          attributes: ['categoryId'],
          as: 'categories',
          include: {
            model: Categories,
            as: 'categories',
          }
        }
      });
      return result; 
    } catch (error) {
      throw error;
    }
  }

  static async create(task, categories) {
    try {
      const taskResult = await Tasks.create(task);
      // task devuelve un objeto { id, title, description, isComplete, atcreate, atupdate }
      categories.forEach(async (category) => await TaskCategories.create({
        categoryId: category,
        taskId: taskResult.id
      }))
      return {message: 'Task created'}
    } catch (error) {
      throw error
    }
  } 

  static async update(id) {
    try {
      const result = await Tasks.update({isComplete: true}, {
        where: {id}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TaskServices;