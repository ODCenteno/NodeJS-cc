// Interfaces: mejor forma de definir objetos
// principal característica: permite generar herencia, extendiendo sus características

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: 'S' | 'M' | 'L' | 'XL'; // se pueden definir tipos directamente en la interface
}

const products: Product[] = [];

products.push({
  id: '1',
  title: "Misión imposible",
  createdAt: new Date(),
  stock: 23
})

// generamos una función para ejemplificar el añadir productos
const addProduct = (data: Product): Product[] => {
  products.push(data);
  return products;
}
