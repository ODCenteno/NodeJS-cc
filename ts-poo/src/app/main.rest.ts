import { ProductHttpService } from "./services/product-http.service";

(
  async () => {
    const productService = new ProductHttpService();

    const allProducts = await productService.getAll();
    console.log(typeof allProducts);
    const firstProduct = allProducts.slice(0, 5);
    console.log(firstProduct);

})();
