import Modal from "@mui/material/Modal";
import axios from "axios";
import Routes from './Routes'


export const getFiles = async () => {
  try{
    const response =await axios.post(Routes.api.files.getFiles, {
      api_key: import.meta.env.VITE_API_KEY,
    })
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}

export const addFile = async (idUser:number, settledNumber:string, price:string, redirectTo:number) => {
  try{
    const response =await axios.post(Routes.api.files.addFile, {
      "idusers": redirectTo,
      "files_registered": settledNumber,
      "files_price": price,
      "idproviders": idUser,
    })
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
    })
    console.log(response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}

export const deleteFile = async () => {
  try{
    const response = await axios.delete(Routes.api.files.deleteFile,{})
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}
