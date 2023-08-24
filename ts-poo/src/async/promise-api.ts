import axios from 'axios';

(
  async () => {
    function getProducts() {
      const products = axios.get('https://api.escuelajs.co/api/v1/products');
      return products;
    }
    async function getUsers() {
      const { data } = await axios.get('https://api.escuelajs.co/api/v1/users');
      return data;
    }

    const rtaProdutcs = await getProducts();
    console.log(rtaProdutcs.data);

    const rtaUsers = await getUsers();
    console.log(rtaUsers);
  })()

