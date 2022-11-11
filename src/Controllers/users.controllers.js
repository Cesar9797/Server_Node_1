const UserServices = require('../Services/users.services');

const getAllUsers = async (req, res) => {
  try{
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch(error) {
    next(error);
  }
}

const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const getAddressByIdUser = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getUserJoinAddress(id);
    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}

const getTaskByUser = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getUserJoinTask(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.get(newUser);
    res.status(200).json(result);
  } catch (error) {
    next({status: 400, errorContent: error});
  }
}

const updateUser = async (req, res) => {
  try {
    
  } catch (error) {
    next(error);
  }
}

module.exports = { 
  getAllUsers,
  getUserById,
  getAddressByIdUser,
  getTaskByUser,
  createUser
};