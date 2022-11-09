const UserServices = require('../Services/users.services');

const getAllUsers = async (req, res) => {
  try{
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch(error) {
    console.log(error);
  }
}

const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const getAddressByIdUser = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getUserJoinAddress(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
  }
}

const getTaskByUser = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getUserJoinTask(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { 
  getAllUsers,
  getUserById,
  getAddressByIdUser,
  getTaskByUser
};