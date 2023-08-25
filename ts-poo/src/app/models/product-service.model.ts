import { Product } from "./products.model";
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  create(data: CreateProductDto): Product | Promise<Product>;
  // add(product: Product): Product | Promise<Product[]>;
  update(id: Product['id'], changes: UpdateProductDto): Product | undefined | Promise<Product | undefined>;
  findOne(id: Product['id']): Product | undefined | Promise< Product | undefined >;
}
