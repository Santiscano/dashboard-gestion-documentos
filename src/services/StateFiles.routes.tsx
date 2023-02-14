import axios from "axios";
import Routes from './Routes'


export const getStatesFiles = async () => {
  try{
    const response = await axios.post(Routes.api.stateFiles.getStateFiles ,{
      "api_key": "37323a416eb548626b3e668255c4d436"
    })
    console.log('response: ', response);
    return response;
  } catch (error){
    console.log('error: ', error);
  }
}
export const addStateFile = async () => {
  try{
    const response = await axios.post(Routes.api.stateFiles.addStateFile,{
      "files_states": "PrUeba",
      "files_states_description": "Documento ingresado por primera vez a la plataforma"
    })
    console.log('response: ', response);
    return response;
  } catch (error){
    console.log('error: ', error);
  }
}
export const editStateFile = async () => {
  try{
    const response = await axios.put(Routes.api.stateFiles.editStateFile,{
      "idfiles_states": 6,
      "files_states": "Recaaaah",
      "files_states_description": "Documento que no cumple con los criterios de la empresa"
    })
    console.log('response: ', response);
    return response;
  } catch (error){
    console.log('error: ', error);
  }
}
export const deleteStateFile = async () => {
  try{
    const response = await axios.delete(Routes.api.stateFiles.deleteStateFile,{})
    console.log('response: ', response);
    return response;
  } catch (error){
    console.log('error: ', error);
  }
}

