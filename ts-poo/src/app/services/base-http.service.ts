import axios from "axios";
import { baseUrl } from "../utils/base-url";
import { Product } from "../models/products.model";

// Se define el genérico en la clase
// El tipo puede ser definido como diferentes plantillas
class BaseHttpService<TypeReq> {
  constructor (
    public url: string,
    public endPoint: string
  ) {}

  async getAll() {
    const targetUrl = `${this.url}${this.endPoint}`;
    const { data } = await axios.get<TypeReq[]>(targetUrl);
    return data;
  }
}

(async () => {
  // Definición del tipo personalizado para la clase: Product
  const ProductService = new BaseHttpService<Product>(baseUrl, '/products');
  const productsRes = await ProductService.getAll();
  console.log('Products', productsRes.length);

    // Definición del tipo personalizado para la clase: string
  const categoryService = new BaseHttpService<string>(baseUrl, '/products/categories');
  const categoriesRes = await categoryService.getAll();
  console.log('Categories', categoriesRes.length);
})();


