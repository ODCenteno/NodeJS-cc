// eslint-disable-next-line import/no-extraneous-dependencies
const { Router } = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

// Generar una instancia de Routes
const router = new Router();

// Utilizamos el router en lugar de la app
// Quitamos de la URL /products y queda .../ruta
const productList = [];
let productId = 1;

router.get('/', (req, res) => {
  const { size } = req.query;
  const limitSize = size || 10;

  for (let i = 0; i < limitSize; i += 1) {
    productList.push({
      productId,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });

    productId += 1;
  }
  res.json(productList);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (Number.isNaN(parsedId)) {
    res.status(400).json({ error: `Invalid product id: ${id}, is not a valid number` });
    return;
  }

  const requestedProduct = productList.find((product) => product.productId === parsedId);

  if (requestedProduct) {
    res.json([requestedProduct]);
  } else {
    res.status(404).json({ error: `Product with id: ${id} not found` });
  }
});

router.post('/', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const body = req.body;
  res.json({
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
