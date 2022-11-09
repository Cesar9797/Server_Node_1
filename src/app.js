const express = require('express');
const initModules = require('./models/initModels');
const db = require('./utils/database');
const userRoutes = require('../src/Routes/users.routes');
const taskRoutes = require('../src/Routes/tasks.routes');

const app = express();

db.authenticate().then(() => console.log('Autenticación exitosa')).catch((error) => console.log(error)); // Devuelve una promesa

db.sync({ force: false }).then(() => console.log('Base de datos sincronizada')).catch(error => console.log(error)); // Devuelve una promesa

initModules();

app.use(express.json());
app.use('/api/v1', userRoutes);
app.use('/api/v1', taskRoutes);


app.get('/', (req, res) => {
  res.status(200).json({message: 'Todo bien'});
})

require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Servidor corriendo');
})