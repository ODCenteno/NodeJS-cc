import { ROLES, User } from "./enums"

const currentUser: User = {
  username: 'Dani',
  role: ROLES.CUSTOMER
}

// Versión más básica de como se procesaría una verificación con parámetro único
export const checkAdminRole = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
}

const rta = checkAdminRole();
console.log(rta);

// Versión Rest Params usando ...
export const checkRoleRest = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) return true;
  return false;
}

const rtaRest = checkRoleRest(ROLES.ADMIN, ROLES.SELLER);
console.log('REST', rtaRest);
