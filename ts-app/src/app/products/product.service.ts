// En service tenemos la manipulación / métodos: creación, manipulación, etc
import { Product } from "./product.model";
import { createProductDto, findProductsDto, updateProductDto } from "./product.dto";
import { faker } from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: createProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      categoryName: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }

  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: updateProductDto): Product => {
  const indexItem = products.findIndex(item => item.id === id);
  const prevData = products[indexItem];
  products[indexItem] = {
    ...prevData,
    ...changes
  }
  return products[indexItem];
}

// buscar productos
export const findProducts = (dto: findProductsDto): Product[] => {

  return products
}

// obtener un producto

// Eliminar un producto

