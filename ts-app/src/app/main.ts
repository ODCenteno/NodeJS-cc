import { addProduct } from "./products/products.service";
import { Category } from "./categories/categories.model";

addProduct({
  id: '1',
  title: "Misión imposible",
  createdAt: new Date(),
  stock: 23,
  category: {
    id: 23,
    categoryName: 'fiction'
  }
})
