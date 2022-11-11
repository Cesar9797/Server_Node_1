const {Router} = require('express');
const { getTasksByUserId, createTasks, updateTask } = require('../Controllers/tasks.controllers')

const router = Router();

// obtener tareas por user id
router.get('/tasks/:userId', getTasksByUserId);

// Crear una ruta para que un usuario pueda crear una tarea 
// idUser, categories, title, description
// El body para la petición sera el siguiente:

/* 
{
  task: {idUser, title, description},
  categories: [1,3,4]
} 
*/

router.post('/tasks', createTasks);

// router.get('/tasks/:id/categories', getTaskByCategories);

router.patch('/tasks/:id', updateTask);


module.exports = router;