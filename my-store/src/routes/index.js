// eslint-disable-next-line import/no-extraneous-dependencies
const router = require('express').Router();
// Archivos que controlan todas las rutas y routers
const productsRouter = require('./products.router');
const discoverRouter = require('./discover.router');

function routerApi(app) {
  // Generando un Path Global para los endpoints
  app.use('/api/v1', router);
  // para controlar las rutas utilizamos el router con el endpoint primario
  router.use('/products', productsRouter);
  router.use('/discover', discoverRouter);
}

// Exportamos el controlador de las rutas
module.exports = routerApi;
