import axios from "axios";
import Routes from './Routes'

export const uploadfile = async (file:any) => {
  try{
    console.log('me comence a ejecutar')
    const response = await axios.post(Routes.api.Pdf.uploadfile, file)
    console.log('response uploadfile: ', response);
    return response;
  } catch (error) {
    console.log(error);
  }
}


export const getFile = async () => {
  try{
    const response = await axios.post(Routes.api.Pdf.getFile, {

    })
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
