import { Product } from './product.model';

// Ejemplo de uso de Omit
export interface createProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string;
}

// Utilizando Partial. Define atributos como opcionales
export interface updateProductDto extends Partial<createProductDto> {}

// Utilizando Readonly para la búsqueda
export interface findProductsDto extends Readonly<Partial<Product>> {}
