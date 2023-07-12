// En este archivo van los tipos y modelado de datos

// Utilizamos la palabra export para utilizar estos tipos en otros archivos
export type Sizes = "S" | "M" | "L" | "XL";

export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
};
