/* eslint-disable import/no-extraneous-dependencies */
const boom = require('@hapi/boom');

// Configurando un middleware dinámico, que toma las propiedades
// retornando un middleware
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    // Propiedad validate de Joi. Resuelve todos los errores
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
