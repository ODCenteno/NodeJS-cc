// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');
const { Router } = require('express');

// Generar una instancia de Routes
const router = new Router();

// Utilizamos el router en lugar de la app
// Quitamos de la URL /products y queda .../ruta
router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json([
    {
      categoryId,
      category: 'Food',
      products: [],
    },
  ]);
});

module.exports = router;
