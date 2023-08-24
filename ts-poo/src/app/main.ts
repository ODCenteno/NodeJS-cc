import axios from 'axios';
import { Product } from './products.model';

(
  async () => {
    // Tipando la respuesta de forma externa
    async function getProducts(): Promise<Product[]> {
      // Tipando la respuesta dentro de la función
      const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
      return data;
    }
    async function getUsers() {
      const usersInfo = await axios.get('https://api.escuelajs.co/api/v1/users');
      // Forzando la definición de un tipo casteando con 'as'
      const usersData = usersInfo.data as Product[];
      return usersData;
    }

    const rtaProdutcs = await getProducts();
    console.log(rtaProdutcs);

    const rtaUsers = await getUsers();
    console.log(rtaUsers);
  })()

