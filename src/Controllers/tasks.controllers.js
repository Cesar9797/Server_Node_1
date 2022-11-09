const TaskServices = require('../Services/tasks.services');


const getAllTasks = async (req, res) => {
  try {
    const result = await TaskServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const getTaskByCategories = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await TaskServices.getTaskJoinCategories(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const postTask = async (req, res) => {
  try {
    const data = req.body;
    const result = await TaskServices.postData(data);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTasks,
  postTask,
  getTaskByCategories
}