import axios from "axios";
import Routes from './Routes';
import { getHeader, set } from "../components/tools/SesionSettings";


export const showTablePending = async () => {
  try{
    const response = await axios.post(Routes.api.tables.pending, getHeader());
  } catch(error) {
    console.log('error: ', error);
  }
};

export const showTableAllFiles = async () => {
  try{
    const response = await axios.get(Routes.api.tables.allFiles, getHeader());
    console.log('response: ', response);
  } catch(error) {
    console.log('error: ', error);
  }
};
