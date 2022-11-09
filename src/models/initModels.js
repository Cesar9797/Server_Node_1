const Address = require('./addresses.models');
const Tasks = require('./tasks.models');
const Users = require('./users.models');
const Categories = require('./categories.models');
const TaskCategories = require('./taskcategories.models');

const initModules = () => {

  // Un usuario tiene una dirección
  // Una dirección pertenece un usuario
  Users.hasOne(Address, { as: 'home', foreignKey: 'user_id' });

  Address.belongsTo(Users, { as: 'resident', foreignKey: 'user_id' });


  // Un usuario tiene muchas tareas
  Users.hasMany(Tasks, { as: 'todo', foreignKey: 'user_id' });
  // Una tarea pertenece a un usuario
  Tasks.belongsTo(Users, { as: 'author', foreignKey: 'user_id' });

  // Manejamos la relacion de abajo con la table pivote 

  Tasks.hasMany(TaskCategories, {as: 'categories', foreignKey: 'task_id'});
  TaskCategories.belongsTo(Tasks, {as: 'todo', foreignKey: 'task_id'});

  Categories.hasMany(TaskCategories, {as: 'todo', foreignKey: 'category_id'});
  TaskCategories.belongsTo(Categories, {as: 'categories', foreignKey: 'category_id'});

//   Categories.belongsToMany(Tasks, { through: 'task_categories' });

//   Tasks.belongsToMany(Categories, { through: 'task_categories' });
 }

module.exports =  initModules;
