import { BaseModel } from "../base.model";
import { Category } from "../categories/categories.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  // id: string | number;
  // title: string;
  // createdAt: Date;
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  category: Category;
  color: string;
  price: string;
  isNew: boolean;
  tags: string[];
}
