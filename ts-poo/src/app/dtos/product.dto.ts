import { Product } from '../models/products.model';
import { Category } from '../models/products.model';

// Ejemplo de uso de Omit
export interface CreateProductDto extends Omit<Product, "id" | "category"> {
  //categoryId: Category['categoryId'];
}

// Utilizando Partial. Define atributos como opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Utilizando Readonly para la búsqueda
// export interface FindProductsDto extends Readonly<Partial<Omit<Product, 'tags'>>> {}
