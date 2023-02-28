import axios from "axios";
import { getHeader, set } from "../components/tools/SesionSettings";
import Routes from './Routes'

export const createUser = async (users_email:string, users_password:string) => {
  try{
    const response = await axios.post(Routes.api.firebase.createUser,{
      users_email,
      users_password,
    },getHeader())
    console.log('response: ', response);
  } catch(error) {
    console.log('error: ', error);
  }
}
export const login = async (users_email:string, users_password:string) => {
  try{
    const response = await axios.post(Routes.api.firebase.login,{
      users_email,
      users_password,
    },getHeader())
    const { accessToken } = response?.data.data.stsTokenManager;
    set('accessToken', accessToken);
    return response;
  } catch(error) {
    console.log('error: ', error);
  }
}
export const validateUser = async () => {
  try{
    const response = await axios.post(Routes.api.firebase.validateUser,{},getHeader())
    return response;
  } catch(error) {
    console.log('error: ', error);

  }
}
