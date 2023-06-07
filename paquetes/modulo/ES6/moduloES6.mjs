// Exportando utilizando módulos de ES6
// Exportando una variable o función previamente declarada
function saludar() {
  console.log('Hola mundo');
  return true;
}
export { saludar };

// exporta una constante
export const foo = Math.sqrt(2);