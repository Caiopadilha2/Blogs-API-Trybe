const express = require('express');
const authInfosLogin = require('./middlewares/infosLogin');
const loginController = require('./database/controllers/login');

const app = express();

app.use(express.json());

app.post('/login', authInfosLogin, loginController.login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
