import Modal from "@mui/material/Modal";
import axios from "axios";
import Routes from './Routes';
import { getHeader, set } from "../components/tools/SesionSettings";



export const getFiles = async () => {
  try{
    const response =await axios.post(Routes.api.files.getFiles, {
      api_key: import.meta.env.VITE_API_KEY,
    }, getHeader())
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}

export const addFile = async (
  idUser:number, settledNumber:string, price:string, redirectTo:number,
  idsedes: number, files_account_type: any, files_account_type_number:any,
  IdUserSession:number,
) => {
  try{
    // console.log("info que envio: settledNumber: ",settledNumber, " price: ",price," redirectTo: ",redirectTo," idsedes: ",idsedes)
    const response =await axios.post(Routes.api.files.addFile, {
      "files_registered": settledNumber,
      "idsedes": idsedes,
      "idproviders": idUser,
      "idusers": redirectTo,
      "files_type": "ADMINISTRATIVO",
      "files_price": price,
      "files_account_type": files_account_type,
      "files_account_type_number": files_account_type_number,
      "userSession": IdUserSession,
    }, getHeader())
    // console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }

}

export const editFile = async () => {
  try{
    const response =await axios.put(Routes.api.files.editFile,{
      "idfiles": 1,
      "idproviders": 2,
      "idusers": 2,
      "idfiles_states": 1,
      "files_type": "operativo",
      "files_registered": "123456",
      "files_cost_center": "012031",
      "files_code_accounting": "090909",
      "files_code_treasury": "101010",
      "files_price": 500001
    }, getHeader())
    console.log(response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}

export const deleteFile = async () => {
  try{
    const response = await axios.delete(Routes.api.files.deleteFile, getHeader())
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}
