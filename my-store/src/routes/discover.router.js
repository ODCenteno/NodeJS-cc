// eslint-disable-next-line import/no-extraneous-dependencies
const { Router } = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');
const isValidAnimalType = require('../utils/validAnimals');

// Generar una instancia de Routes
const router = new Router();

// router.get('/', (req, res) => {
//   res.send('Choose an animal');
// });

router.get('/?', (req, res) => {
  const { animalType, size } = req.query;
  const results = size || 10;
  const animalCollection = [];
  const isValid = isValidAnimalType(animalType);

  if (isValid) {
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
  } else {
    res.status(400).json({ error: `Invalid animal type: ${animalType}` });
    return;
  }

  res.json(animalCollection);
});

module.exports = router;
