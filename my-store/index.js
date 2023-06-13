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

// Middleware para manejar peticiones post en Json
app.use(express.json());

// Ejecutamos la función del router
routerApi(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
