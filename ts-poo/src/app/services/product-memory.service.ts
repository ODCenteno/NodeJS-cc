// En service tenemos la manipulación / métodos: creación, manipulación, etc
import { Product } from "../models/products.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { faker } from "@faker-js/faker";
import { ProductService } from "../models/product-service.model";

// Migrando las funciones a una clase
export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.string.uuid(),
      price: faker.commerce.price(),
      category: {
        categoryId: faker.string.uuid(),
        categoryName: faker.commerce.department(),
        image: faker.image.url()
      }
    }

    return this.add(newProduct);
  }

  private add(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const indexItem = this.products.findIndex((item: Product) => item.id === id);
    const prevData = this.products[indexItem];
    this.products[indexItem] = {
      ...prevData,
      ...changes
    }
    return this.products[indexItem];
  }

  getAll() {
    return this.products;
  }

  findOne(id: Product['id']): Product | undefined {
    return this.products.find((item) => item.id === id);
  }
}


// export const products: Product[] = [];

// export const dadProduct = (data: CreateProductDto): Product => {
//   const newProduct = {
//     ...data,
//     id: faker.string.uuid(),
//     title: faker.word.words({ count: { min: 5, max: 10 } }),
//     price: faker.commerce.price()
//     // category: {
//     //   id: faker.string.uuid(),
//     //   categoryName: faker.commerce.department(),
//     //   image: faker.image.url()
//     // }
//   }

//   products.push(newProduct);
//   return newProduct;
// }



// // buscar productos
// export const findProducts = (dto: FindProductsDto): Product[] => {

//   return products
// }

// obtener un producto

// Eliminar un producto

