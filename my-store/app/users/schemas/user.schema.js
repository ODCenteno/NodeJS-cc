// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require('joi');

// Preparando datos para validaciones
const today = new Date(); // Obtiene la fecha actual
const minDate = new Date(today.getMonth(), today.getDate(), today.getFullYear() - 18);

// Haciendo un schema específico para cada campo
const id = Joi.string().uuid();
const name = Joi.string().min(2).max(25);
const jobTitle = Joi.string().min(3);
const birthDay = Joi.date().greater(minDate);

const createUserSchema = Joi.object({
  id: Joi.required(),
  name: name.required(),
  jobTitle: jobTitle.required(),
  birthDay: birthDay.required(),
});

const updateUserSchema = Joi.object({
  name,
  jobTitle,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

// Exportamos para ser manejados por los middlewares
module.exports = { createUserSchema, updateUserSchema, getUserSchema };
