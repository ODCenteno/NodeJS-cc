// Los enums permiten definir variables o constantes preestablecidas
export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export interface User {
  userId: string | number;
  username: string;
  role: ROLES;
}
