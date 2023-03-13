import axios from "axios";
import Routes from './Routes';
import { getHeader, set } from "../components/tools/SesionSettings";


export const getCedis = async () => {
  try{
    const response = await axios.post(Routes.api.cedis.get,{
      api_key: import.meta.env.VITE_API_KEY
    }, getHeader())
    const cedis = await response.data
    return cedis;
  } catch (err) {
    console.log(err)
  }
}

export const createCedi = async (
  city:string,
  country: string,
  address: string,
  cediName: string,
  type: string,
) => {
  try{
    const response = await axios.post(Routes.api.cedis.create,{
      "sedes_city":city,
      "sedes_country": country,
      "sedes_address": address,
      "sedes_name": cediName,
      "sedes_type": type,
    }, getHeader())
    console.log('response create cedi: ',response);
    return response;
  } catch (err) {
    console.log(err)
  }
}

export const editCedi = async () => {
  try{
    const response = await axios.put(Routes.api.cedis.edit,{
      "idsedes": 8,
      "sedes_city": "chigorodo",
      "sedes_country": "locombia",
      "sedes_address": "alla queda",
      "sedes_name": "Enviexpress - locombia"
    }, getHeader())
    console.log('response edit: ',response);
  } catch(error) {console.log(error)}
}

export const deleteCedi = async (id:number) => {
  try{
    const response = await axios.delete(Routes.api.cedis.delete + id, getHeader() )
    console.log('response delete: ', response);
    return response;
  } catch(error) {console.log(error)}
}
