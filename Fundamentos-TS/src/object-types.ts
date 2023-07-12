import { addProduct } from "./products/product.service";

(() => {
  addProduct({
    title: "Camisas Negras",
    createdAt: new Date(),
    stock: 24,
    size: "L",
  });
})();