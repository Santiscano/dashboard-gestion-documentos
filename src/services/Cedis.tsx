import axios from "axios";
import Routes from './Routes'
import { payload } from "./GetRoutes.routes";
// import * as dotenv from 'dotenv'

// dotenv.config()


export const getCedis = async () => {
  try{
    const response = await axios.post(`${payload[4].URL}`,{
      api_key: process.env.API_KEY
    })
    console.log('response: ', response);
    return response;
  } catch (err) {
    console.log(err)
  }
}
export const createCedi = () => {}
export const editCedi = () => {}
export const deleteCedi = () => {}
