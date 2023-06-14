const router = require('express').Router();

const categoriesRouter = require('./categories.router');

function categoriesRouterApi(app) {
  // Generando un Path Global para los endpoints
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
}

module.exports = categoriesRouterApi;
