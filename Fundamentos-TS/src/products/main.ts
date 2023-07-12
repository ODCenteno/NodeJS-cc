import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: "Poleras",
  createdAt: new Date(),
  stock: 32,
  size: "XL",
});

addProduct({
  title: "Camisas Negras",
  createdAt: new Date(),
  stock: 24,
  size: "L",
});

console.log(products);

const total = calcStock();

console.log(total);