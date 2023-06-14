/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const productsRouterApi = require('./products/routes/index');
const usersRouterApi = require('./users/routes/index');
const categoriesRouterApi = require('./categories/routes/index');

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

// Ejecutamos la función del router
productsRouterApi(app);
usersRouterApi(app);
categoriesRouterApi(app);

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

module.exports = app;
