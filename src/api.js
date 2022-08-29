const express = require('express');
const loginValidate = require('./middlewares/infosLogin');
const loginController = require('./controllers/login');

const app = express();

app.use(express.json());

app.post('/login', loginValidate, loginController.login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
