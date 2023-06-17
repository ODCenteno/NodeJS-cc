/* eslint-disable import/no-extraneous-dependencies */
const Joi = require('joi');

// Haciendo un schema específico para cada ampo
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});
const updateProductSchema = Joi.object({
  name,
  price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

// Exportamos para ser manejados por los middlewares
module.exports = { createProductSchema, updateProductSchema, getProductSchema };
