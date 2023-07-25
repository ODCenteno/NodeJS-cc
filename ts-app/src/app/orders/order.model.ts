import { Product } from "../products/products.model";
import { User } from "../users/user.model";

export interface Order {
  orderId: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}
