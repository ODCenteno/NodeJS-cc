// Los enums permiten definir variables o constantes preestablecidas
export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
}

// Se llama directamente a la constante predeterminada
export const superUser: User = {
  username: 'Superastro',
  role: ROLES.ADMIN,
}
