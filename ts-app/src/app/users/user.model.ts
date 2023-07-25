import { BaseModel } from "../base.model";

// Los enums permiten definir variables o constantes preestablecidas
export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
