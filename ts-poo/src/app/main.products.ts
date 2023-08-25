import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Primer producto',
  price: '550.00',
  images: [],
  description: 'Product description'
});

const products = productService.getAll();
console.log(products[0]);
