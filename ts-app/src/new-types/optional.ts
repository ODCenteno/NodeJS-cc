export const creatProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = creatProduct("plato", true, 15);
console.log(p1);
