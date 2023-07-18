export const creatProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
}

const p1 = creatProduct("plato", true, 15);
console.log(p1);
