// Archivo que controla todas las rutas y routers
const productsRouter = require('./products.router');
const discoverRouter = require('./discover.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/discover', discoverRouter);
}

// Exportamos el controlador de las rutas
module.exports = routerApi;
