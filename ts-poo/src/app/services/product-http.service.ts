import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import axios from "axios";

import { ProductService } from "../models/product-service.model";
import { Product } from "../models/products.model";
import { baseUrl } from "../utils/base-url";

export class ProductHttpService implements ProductService {
  async getAll(): Promise<Product[]> {
      const { data } = await axios.get<Product[]>(`${baseUrl}/products`);
      return data;
  }
  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post(`${baseUrl}/products`, dto);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product | undefined> {
    const { data } = await axios.put(`${baseUrl}/products/${id}`, changes);
    return data;
    }

  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await axios.get(`${baseUrl}/products/${id}`);
    return data;
  }
}
