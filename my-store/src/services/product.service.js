// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

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

      this.lastProductID += 1;
    }
  }

  create(size) {

  }

  find() {
    return this.productList;
  }

  findOne(id) {
    const searchedProduct = this.productList.find((product) => product.productId === id);
    return searchedProduct;
  }

  update() {
    //
  }

  delete() {
    //
  }
}

module.exports = ProductService;
