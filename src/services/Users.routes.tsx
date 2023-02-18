import axios from "axios";
import Routes from './Routes'


export const validateUser = async () => {
  try{
    const response = await axios.post(Routes.api.users.validate, {
      "api_key": "37323a416eb548626b3e668255c4d436",
      "users_email": "santiago.sierra@teclab.com.co",
      "users_password": "1234"
    })
    console.log('response: ', response);
    return response;
  } catch(error) {
    console.log(error)
  }
}

export const getUsers = async () => {
  try{
    const response = await axios.post(Routes.api.users.getUsers,{
      api_key: import.meta.env.VITE_API_KEY
    })
    console.log('response getusers: ', response);
    const users = response.data
    return users;
  } catch(error) {
    console.log(error)
  }
}

export const createUser = async () => {
  try{
    const response = await axios.post(Routes.api.users.createUser,{
      "idroles": 6,
      "idsedes": 1,
      "users_identification_type": "pasaporte",
      "users_identification": "123456789",
      "users_name": "frontend",
      "users_lastname": "React Angular",
      "users_address": "codigo hack",
      "users_phone": "3045435131",
      "users_email": "react@angular.com.co",
      "users_password": "123456",
      "users_providers_paydays": null,
      "users_providers_expiration_date": null
    })
    console.log("create user: ", response);
    return response;
  } catch(error) {
    console.log(error)
  }
}
export const editUser = async () => {
  try{
    const response = await axios.put(Routes.api.users.editUser,{
      "idusers": 19,
      "idroles": 6,
      "idsedes": 1,
      "users_identification_type": "PASAPORTE",
      "users_identification": "123456789",
      "users_identification_digital_check": "6",
      "users_name": "FRONTEND",
      "users_lastname": "REACT ANGULAR",
      "users_address": "CODIGO HACK",
      "users_phone": "3045435131",
      "users_email": "react@angular.javascript.css",
      "users_password": "123456",
      "users_providers_paydays": null,
      "users_providers_expiration_date": null,
      "users_status": "ACTIVO"
    })
  console.log("response edit user: ", response);
    return response;
  } catch(error) {
    console.log(error)
  }
}
export const deleteUser = async () => {
  try{
    const response = await axios.delete(Routes.api.users.deleteUser,{})

    return response;
  } catch(error) {
    console.log(error)
  }
}
