const animalTypes = ['bear', 'bird', 'cat', 'cetacean', 'cow', 'dog', 'fish', 'horse', 'insect', 'lion', 'snake'];

const isValidAnimalType = (animalSearched) => {
  const isValid = animalTypes.find((animal) => animal === animalSearched);
  return isValid;
};

module.exports = isValidAnimalType;
