import { faker } from '@faker-js/faker';

import { addProduct, products } from "./products/product.service";


for (let i = 0; i < 50; i += 1) {
  addProduct({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    createdAt: faker.date.recent(),
    updatedAt: new Date(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    title: faker.commerce.productName(),
    stock: faker.number.int(),
    category: {
      id: faker.string.uuid(),
      categoryName: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: new Date()
    },
    color: faker.color.rgb(),
    price: faker.commerce.price(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse'])
  });
}

console.log(products);
