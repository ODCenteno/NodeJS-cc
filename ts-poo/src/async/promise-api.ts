import axios from 'axios';
import { baseUrl } from '../app/utils/base-url';

(
  async () => {
    function getProducts() {
      const products = axios.get(`${baseUrl}/products`);
      return products;
    }
    async function getUsers() {
      const { data } = await axios.get(`${baseUrl}/users`);
      return data;
    }

    const rtaProdutcs = await getProducts();
    console.log(rtaProdutcs.data);

    const rtaUsers = await getUsers();
    console.log(rtaUsers);
  })()

