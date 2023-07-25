import { BaseModel } from "../base.model";
import { Category } from "../categories/categories.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  // id: string | number;
  // title: string;
  // createdAt: Date;
  title: string;
  stock: number;
  category: Category;
  size?: Sizes;
}
