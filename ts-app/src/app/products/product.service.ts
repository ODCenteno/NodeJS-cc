// En service tenemos la manipulación / métodos: creación, manipulación, etc
import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product): Product[] => {
  products.push(data);
  return products;
}
