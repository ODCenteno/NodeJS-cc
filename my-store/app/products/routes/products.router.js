// eslint-disable-next-line import/no-extraneous-dependencies
const router = require('express').Router();
const validatorHandler = require('../../middlewares/validator.handler');
// importamos la clase que maneja el servicio de productos
const ProductService = require('../services/product.service');
const { getProductSchema, updateProductSchema, createProductSchema } = require('../schemas/product.schema');

const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const requestedProduct = await service.findOne(id);
      res.status(201).json(requestedProduct);
    // if (!(requestedProduct === -1)) {
    //   res.json(requestedProduct);
    // } else {
    //   res.status(404).json({ error: `Product with id: ${id} not found` });
    // }
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  },
);

router.put(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
      const updatedProduct = await service.update(id, body);
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-unused-vars, prefer-destructuring
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.delete(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

// Exportamos el router que controla todas las peticiones
module.exports = router;
