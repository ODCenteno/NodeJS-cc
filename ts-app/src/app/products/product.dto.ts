import { Product } from './product.model';

export interface createProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string;
}
