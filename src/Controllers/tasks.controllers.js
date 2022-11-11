const TaskServices = require('../Services/tasks.services');


const getTasksByUserId= async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await TaskServices.getByUserId(userId);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: 'Algo salio mal durante la petición',
      status: 400,
      errorContent: error
    });
  }
}

const createTasks = async (req, res, next) => {
  try {
    const {task, categories} = req.body;
    const result = await TaskServices.create(task, categories);
    res.status(201).json(result);
  } catch (error) {
    next({
      message: 'Cant create the task',
      status: 400,
      errorContent: error
    });
  }
}

const updateTask = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await TaskServices.update(id);
    res.status(200).json({messae: 'Usuario actualizado'});
  } catch (error) {
    next({
      message: 'No se puede actualizar la tarea',
      status: 400,
      errorContent: error
    })
  }
}

// const getTaskByCategories = async (req, res) => {
//   try {
//     const {id} = req.params;
//     const result = await TaskServices.getTaskJoinCategories(id);
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = {
  getTasksByUserId,
  createTasks,
  updateTask
  // getTaskByCategories
}