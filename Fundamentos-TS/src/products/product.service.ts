import { Product } from './product.model'

// indicamos que el tipo de products es un array de objetos de tipo Products
export const products : Product[] = [];

export const addProduct = (data: Product): string => {
  products.push(data);
  return "Product added succesfully";
};

export const calcStock = (): number => {
  let total = 0;

  products.forEach((item) => {
    total += item.stock;
  })
  return total;
}