// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const products = require('./src/products');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  const title = 'About Page';
  res.send(title);
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  const requestedProduct = products.find((product) => product.id === parseInt(id, 10));

  if (requestedProduct) {
    res.json([requestedProduct]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.get('/categories/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json([
    {
      categoryId,
      category: 'Food',
      products: [],
    },
  ]);
});

app.get('/discover?', (req, res) => {
  const { animalType, size } = req.query;
  const results = size || 10;

  const animalCollection = [];

  for (let i = 0; i < results; i += 1) {
    const animalFaker = faker.animal[animalType]();
    const zodiac = faker.person.zodiacSign();
    const address = {
      country: faker.location.country(),
      city: faker.location.city(),
      address: faker.location.streetAddress(false),
    };
    animalCollection.push({
      [animalType]: animalFaker,
      zodiac,
      address,
    });
  }

  res.json(animalCollection);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
