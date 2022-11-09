const {Router} = require('express');
const { getAllTasks, postTask, getTaskByCategories } = require('../Controllers/tasks.controllers')

const router = Router();

router.get('/tasks', getAllTasks);
router.get('/tasks/:id/categories', getTaskByCategories);
router.post('/tasks', postTask);

module.exports = router;