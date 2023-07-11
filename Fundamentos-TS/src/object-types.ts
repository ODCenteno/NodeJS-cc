(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  };

  // indicamos que el tipo de products es un array de objetos de tipo Products
  const products : Product[] = [];

  const addProduct = (data: Product): string => {
    products.push(data);
    console.log(products);
    return "Product added succesfully";
  } 

  addProduct({
    title: "Camisas Negras",
    createdAt: new Date(),
    stock: 24,
    size: "L",
  });
})();