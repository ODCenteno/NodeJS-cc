// Los enums permiten definir variables o constantes preestablecidas
enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
}

// Se llama directamente a la constante predeterminada
const superUser: User = {
  username: 'Superastro',
  role: ROLES.ADMIN,
}
