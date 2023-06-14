const router = require('express').Router();
const usersRouter = require('./users.router');

function usersRouterAPI(app) {
  app.use('/api/v1', router);
  router.use('users', usersRouter);
}

module.exports = usersRouterAPI;
