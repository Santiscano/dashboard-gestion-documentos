import axios from "axios";
import Routes from './Routes'


export const triggerFile = async (pdf:any) => {
  try{
  const response = await axios.post(Routes.api.files.triggerFile, pdf )
  return response;
  } catch (error) {
    console.log(error)
  }
}
export const getFiles = () => {}
export const addFile = () => {}
export const editFile = () => {}
export const deleteFile = () => {}
