import axios from "axios";
import Routes from './Routes';
import { getHeader } from '../components/tools/SesionSettings';
// import { LoginData } from "../interfaces/User";

// export const createUser = async () => {}

export const login = async ( email:string, password: string) => {
  try{
    const response = await axios.post(Routes.api.firebase.login, {
      "users_email": email,
      "users_password": password,
    }, getHeader() )
    console.log(response);
  } catch(err){
    console.log('error: ', err);
  }
}
// export const validateUser = async () => {}
