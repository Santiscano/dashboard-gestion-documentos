import axios from "axios";
import Routes from "./Routes";
import { getHeader, set } from "../components/tools/SesionSettings";


export const getSettled = async (cedi: string) => {
  try{
    const response = await axios.post(Routes.api.generateSettled,{
      api_key: import.meta.env.VITE_API_KEY,
      cedi: cedi
    }, getHeader())
    const settled = response.data.result;
    // console.log('settled: ', settled);
    // console.log("response getSettled: ", response);
    return settled;
  } catch (error) {
    console.log('error: ', error);
  }
}



