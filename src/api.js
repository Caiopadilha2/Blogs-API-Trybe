const express = require('express');
const loginValidate = require('./middlewares/infosLogin');
const loginController = require('./controllers/login');
const categoryController = require('./controllers/category');
const postController = require('./controllers/post');
const validateToken = require('./middlewares/validationToken');
const validationsUser = require('./middlewares/validationsUser');

const app = express();

app.use(express.json());

app.get('/user', validateToken, loginController.getAll);
app.get('/user/:id', validateToken, loginController.getById);
app.get('/categories', validateToken, categoryController.getAll);
app.get('/post', validateToken, postController.getAll);

app.post('/user',
validationsUser.display,
validationsUser.validEmail,
validationsUser.pass,
loginController.createUser);

app.post('/login', loginValidate, loginController.login);
app.post('/categories', validateToken, categoryController.create);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
