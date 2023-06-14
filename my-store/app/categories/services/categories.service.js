// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

class Categories {
  constructor() {
    this.categories = [];
    this.createCategories();
  }

  async createCategories() {
    const limitSize = 20;

    for (let i = 0; i < limitSize; i += 1) {
      this.categories.push({
        categoryId: faker.string.uuid(),
        category: faker.commerce.productAdjective(),
      });
    }
  }

  async createNewCategory(data) {
    const newCategory = {
      categoryId: faker.string.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    return this.categories;
  }

  async findOne(id) {
    const searchedCategory = this.categories.find((category) => category.categoryId === id);
    return searchedCategory;
  }

  async update(id, changes) {
    const categoryIndex = this.categories.findIndex((item) => item.categoryId === id);
    if (categoryIndex === -1) {
      throw new Error('Category not found');
    }

    this.categories[categoryIndex] = {
      categoryId: id,
      ...changes,
    };
    return this.categories[categoryIndex];
  }

  async delete(id) {
    const categoryIndex = this.categories.findIndex(this.categories.categoryId === id);

    if (categoryIndex === -1) {
      throw new Error('Category not found');
    }
    const deletedCategory = this.categories.splice(categoryIndex, 1);
    return { deletedCategory };
  }
}

module.exports = Categories;
