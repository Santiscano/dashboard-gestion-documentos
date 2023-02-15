import axios from "axios";
import Routes from './Routes'


export const getFilesPath = async () => {
  try{
    const response = await axios.post(Routes.api.filesPath.getFilesPath, {
      "api_key": "37323a416eb548626b3e668255c4d436"
    })
    console.log('response: ', response);
  } catch(error){
    console.log('error: ', error);
  }
}
export const createFilePath = async () => {
  try{
    const response = await axios.post(Routes.api.filesPath.createFilePath,{
      "idfiles": 1,
      "files_path": "Taas gud",
      "files_path_observation": "el primer archivo no fue"
    })
    console.log("response createFilepath: ", response)
  } catch (error) {
    console.log('error: ', error);
  }
}

export const deleteFilePath = async () => {
  try{
    const response = await axios.delete(Routes.api.filesPath.deleteFilePath,{})
    console.log('response: ', response);
  } catch (error) {
    console.log('error: ', error);
  }
}
