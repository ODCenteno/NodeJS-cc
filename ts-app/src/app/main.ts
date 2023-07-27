import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct } from "./products/product.service";


for (let i = 0; i < 50; i += 1) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    title: faker.commerce.productName(),
    stock: faker.number.int(),
    color: faker.color.rgb(),
    price: faker.commerce.price(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
    categoryId: faker.string.uuid()
  });
}

console.log(`Productos generados\n${products}`);

const product = products[0];

updateProduct(product.id, {
  title: "This is the way",
  stock: 888
})


