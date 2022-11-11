const express = require('express');
const initModules = require('./models/initModels');
const db = require('./utils/database');
// Importo las rutas de usuario
const userRoutes = require('../src/Routes/users.routes');
// Importo las rutas de tasks
const taskRoutes = require('../src/Routes/tasks.routes');
//Importar el middleware
const logs = require('./middlewares/requestLogs');
// Importar middleware morgan
const morgan = require('morgan');
const app = express();
const handleError = require('./middlewares/error');

db.authenticate().then(() => console.log('Autenticación exitosa')).catch((error) => console.log(error)); // Devuelve una promesa

db.sync({ force: false }).then(() => console.log('Base de datos sincronizada')).catch(error => console.log(error)); // Devuelve una promesa

initModules();

app.use(express.json(), logs, morgan('tiny'));
app.use('/api/v1', userRoutes);
app.use('/api/v1', taskRoutes);

/* app.use(()=>{}) Esta funcion no tiene un punto de montaje */ 


app.use('/', (req, res, next) => {
  console.log('Antes de responder a la solicitud');
  next();
}, (req, res) => {
  res.status(200).json({message: 'Todo bien'});
})

app.use(handleError);

require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Servidor corriendo');
})