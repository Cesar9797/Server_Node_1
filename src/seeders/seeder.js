const db = require('../utils/database');
// Debemos mandar a llamar a los modelos donde vamos a plantar la información
const Users = require('../models/users.models');
const Tasks = require('../models/tasks.models');
const Address = require('../models/addresses.models');
const Categories = require('../models/categories.models');
const initModules = require('../models/initModels');

// arreglos con la información que se va a plantar

initModules();

const users = [
  {nameuser: 'Cesar Lara', email: 'cesar@gmail.com', password: '1234'},
  {nameuser: 'Guadalupe Deyanira', email: 'ponny@gmail.com', password: '1234'},
  {nameuser: 'Nan Lara', email: 'nan@gmail.com', password: '1234'}
];

const addresses = [
  { street: "Buena Vista", number: 157, userId: 1 },
  { street: "benito Juarez", number: 57, userId: 2 },
  { street: "Madero", number: 157, userId: 3 },
];

const tasks = [
  {title: 'Crear seeders', description: 'Para seguir aprendiendo', userId: 1},
  {title: 'Tarea 2', description: 'Tarea 2', userId: 2},
  {title: 'Tarea 3', description: 'Tarea 3', userId: 3}
];

const categories = [
  {name: 'Personal'},
  {name: 'Laboral'},
  {name: 'Escolar'},
  {name: 'Deporte'}
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    addresses.forEach((address) => Address.create(address));
  }, 300);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 500);
  setTimeout(() => {
    tasks.forEach((task) => Tasks.create(task));
  }, 700);
});