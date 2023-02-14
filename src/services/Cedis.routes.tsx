import axios from "axios";
import { accessSync } from "fs";
import Routes from './Routes'

export const getCedis = async () => {
  try{
    const response = await axios.post(Routes.api.cedis.get,{
      api_key: import.meta.env.VITE_API_KEY
    })
    console.log('response: ', response);
    return response;
  } catch (err) {
    console.log(err)
  }
}

export const createCedi = async () => {
  try{
    const response = await axios.post(Routes.api.cedis.create,{
      "sedes_city": "caldas",
      "sedes_country": "Estados Unidos",
      "sedes_address": "Norte america bien arriba",
      "sedes_name": "Enviexpress - MedayoRK"
    })
    console.log('response create: ',response);
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
    })
    console.log('response edit: ',response);
  } catch(error) {console.log(error)}
}

export const deleteCedi = async (id:number) => {
  try{
    const response = await axios.delete(Routes.api.cedis.delete + id )
    console.log('response delete: ', response);
    return response;
  } catch(error) {console.log(error)}
}
