const router = require('express').Router();
const Categories = require('../services/categories.service');

const categoryService = new Categories();

// Utilizamos el router en lugar de la app
// Quitamos de la URL /products y queda .../ruta
router.get('/', (req, res) => {
  const allCategories = categoryService.find();
  res.json(allCategories);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  const searchedCategory = categoryService.findOne(categoryId);

  if (!(searchedCategory === -1)) {
    res.json(searchedCategory);
  } else {
    res.status(404).json({ error: `Product with id: ${categoryId} not found` });
  }
});

router.post('/', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const body = req.body;
  const createdCategory = categoryService.createNewCategory(body);
  res.status(201).json(createdCategory);
});

router.patch('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  // eslint-disable-next-line prefer-destructuring
  const body = req.body;
  const updatedCategory = categoryService.update(categoryId, body);
  res.status(206).json(updatedCategory);
});

router.delete('/:categoryId', (req, res) => {
  const { categoryId } = req.params;

  const deletedCategory = categoryService.delete(categoryId);
  res.status(200).json(deletedCategory);
});

module.exports = router;
