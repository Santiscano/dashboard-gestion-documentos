import axios from "axios";
import Routes from './Routes'


export const getRoles = async () => {
  try{
    const response = await axios.post(Routes.api.roles.get,{
      api_key: import.meta.env.VITE_API_KEY
    })
    console.log('response: ', response);
    return response;
  } catch(error) {
    console.log(error)
  }
}

export const createRol = async () => {
  try{
    const response = await axios.post(Routes.api.roles.create,{
      "roles": "frontEndRol",
      "roles_description": "rol creado desde frontend"
    })
    console.log('response: ', response);
    return response;
  } catch(error) {
    console.log(error)
  }
}

export const editRol = async () => {
  try{
    const response = await axios.put(Routes.api.roles.edit,{
      "idroles": 10,
      "roles": "frontEndRol",
      "roles_description": "Equipo de el verguero"
    })
    console.log('response: ', response);
    return response;
  } catch(error) {
    console.log(error)
  }
}

export const deleteRol = async () => {
  try{
    const response = await axios.delete(Routes.api.roles.delete,{
      headers: {
        api_key: import.meta.env.VITE_API_KEY,
      },
      data: {
        "idroles": 10
      },
    })
    console.log('response delete: ', response);
    return response;
  } catch(error) {
    console.log(error)
  }
}
