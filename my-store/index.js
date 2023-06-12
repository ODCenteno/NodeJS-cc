/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const routerApi = require('./src/routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  const title = 'About Page';
  res.send(title);
});

// app.get('/products', (req, res) => {
//   res.send(products);
// });

// Ejecutamos la función del router
routerApi(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
