/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.productList = [];
    this.generateProducts();
  }

  generateProducts() {
    const limitSize = 20;

    for (let i = 0; i < limitSize; i += 1) {
      this.productList.push({
        productId: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid,
      ...data,
    };
    this.productList.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.productList;
  }

  async findOne(id) {
    const searchedProduct = this.productList.find((product) => product.productId === id);
    if (searchedProduct === -1) {
      throw boom.notFound('Product not found');
    } else {
      return searchedProduct;
    }
  }

  async update(id, changes) {
    const index = this.productList.findIndex((item) => item.productId === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.productList[index];
    this.productList[index] = {
      ...product,
      ...changes,
    };

    return this.productList[index];
  }

  async delete(id) {
    const index = this.productList.findIndex((item) => item.productId === id);
    if (index === -1) {
      throw new Error('Product not found');
    }

    this.productList = this.productList.splice(index, 1);
    return 'Product deleted succesfully';
  }
}

module.exports = ProductService;
