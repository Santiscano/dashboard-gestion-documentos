import axios from "axios";
import { getCedis } from './Cedis.routes';

const server = "http://localhost:4500"

export let payload:any;

export const getRoutes = async () => {
  try{
    const response = await axios.get(`${server}/routerApi`)
    const rutas = response.data.rutas
    payload = rutas;
    console.log('payload: ', payload);
    // await getCedis();
    return payload;
  } catch (err) {
    console.log(err)
  }
}
