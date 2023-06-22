/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema');
const UsersService = require('../services/users.service');
const validatorHandler = require('../../middlewares/validator.handler');

const usersService = new UsersService();

router.get('/', async (req, res) => {
  const users = await usersService.find();
  res.json(users);
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const requestedUser = await usersService.findOne(id);
      res.status(201).json(requestedUser);
    } catch (error) {
      next(error);
    }
  },

  router.post(
    '/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res) => {
      const { body } = req.body;
      const newUser = await usersService.create(body);
      res.status(201).json(newUser);
    },
  ),

  router.put(
    '/:id',
    validatorHandler(updateUserSchema, 'params'),
    async (req, res, next) => {
      const { id } = req.params;
      const { body } = req.body;
      try {
        const updatedUser = await usersService.update(id, body);
        res.json(updatedUser);
      } catch (error) {
        next(error);
      }
    },
  ),

  router.patch(
    '/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const { body } = req.body;
        const user = await usersService.update(id, body);
        res.json(user);
      } catch (error) {
        next(error);
      }
    },
  ),

  router.delete(
    '/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const user = await usersService.delete(id);
        res.json(user);
      } catch (error) {
        next(error);
      }
    },
  ),
);

module.exports = router;
