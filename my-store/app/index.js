/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const productsRouterApi = require('./products/routes/index');
const usersRouterApi = require('./users/routes/index');
const categoriesRouterApi = require('./categories/routes/index');
const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  const title = 'About Page';
  res.send(title);
});

// Middleware para manejar peticiones post en Json
app.use(express.json());

// Ejecutamos las funciones del router
productsRouterApi(app);
usersRouterApi(app);
categoriesRouterApi(app);

// Los middlewares de error deben de estar después del router
// ! Tener en cuenta el orden de los handlers y si tiene next()
app.use(logErrors);
app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

module.exports = app;
