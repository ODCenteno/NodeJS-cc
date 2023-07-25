import { addProduct } from "./products/product.service";
import { Category } from "./categories/categories.model";

addProduct({
  id: '1',
  createdAt: new Date(-5),
  updatedAt: new Date(),
  title: "Misión imposible",
  stock: 23,
  category: {
    id: 23,
    categoryName: 'fiction',
    createdAt: new Date(-5),
    updatedAt: new Date()
  }
})
