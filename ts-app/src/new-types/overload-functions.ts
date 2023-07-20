// Sobrecarga de Funciones

// 1. Definir las Overload signatures
export function parseStr(item: string[]): string;
export function parseStr(item: string): string[];
export function parseStr(item: number): boolean;
// 2. Implementamos la función genérica
export function parseStr(item: unknown): unknown {
  if (Array.isArray(item)) {
    return item.join('');
  } else if (typeof item === 'string') {
    return item.split('');
  } else {
    return true;
  }
}

const toString = parseStr(['V', 'á', 'm', 'o', 'n', 'o', 's']); // Vámonos
console.log(toString);


