// eslint-disable-next-line import/no-extraneous-dependencies
const router = require('express').Router();
// importamos la clase que maneja el servicio de productos
const ProductService = require('../services/product.service');

const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  // const parsedId = parseInt(id, 10);

  // if (Number.isNaN(parsedId)) {
  //   res.status(400).json({ error: `Invalid product id: ${id}, is not a valid id` });
  //   return;
  // }

  const requestedProduct = service.findOne(id);

  if (!(requestedProduct === -1)) {
    res.json(requestedProduct);
  } else {
    res.status(404).json({ error: `Product with id: ${id} not found` });
  }
});

router.post('/', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line no-unused-vars, prefer-destructuring
  const body = req.body;

  res.json({
    message: 'patching',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  });
});

// Exportamos el router que controla todas las peticiones
module.exports = router;
