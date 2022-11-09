const { Router } = require('express');
const {getAllUsers, getUserById, getAddressByIdUser, getTaskByUser} = require('../Controllers/users.controllers');
const router = Router();

// Para obtener todos los usuarios

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/:id/address', getAddressByIdUser);
router.get('/users/:id/tasks', getTaskByUser);

module.exports = router;