import { createRol } from "../../services/Roles.routes";
import { createCedi } from "../../services/Cedis.routes";
import { createUser } from '../../services/Users.routes'


export const handleSubmitCreateRol = async (
  e:any,
  rolName:string,
  setRolName: any,
  rolDescription:string,
  setRolDescription:any,
  ) => {
  try{
    e.preventDefault();
    const res = await createRol(rolName, rolDescription);
    setRolName('');
    setRolDescription('');
  } catch(error) {
    console.log('error: ', error);
  } finally {}
};

export const handleSubmitCreateCedi = async (
  e:any,
  city:string,
  setCity: any,
  country:string,
  setCountry: any,
  address:string,
  setAddress: any,
  cediName:string,
  setCediName: any,
  type:string,
  setType: any,
) => {
  try{
    e.preventDefault();
    const res = await createCedi(city, country, address, cediName, type)
    console.log('res create cedis: ', res);
    setCity('');
    setCountry('');
    setAddress('');
    setCediName('');
    setType('');
  } catch(error) {
    console.log('error: ', error);
  } finally{}
}

export const handleSubmitCreateUser = async (
  e:any,
  idroles: number,
  setIdroles:any,
  idsedes: number,
  setIdsedes: any,
  identification_type: string,
  setIdentification_type: any,
  identification_number: string,
  setIdentification_number: any,
  firstname: string,
  setFirstname: any,
  lastname: string,
  setLastname: any,
  address: string,
  setAddress: any,
  phone: string,
  setPhone: any,
  email: string,
  setEmail: any,
  password: string,
  setPassword: any,
) => {
  try{
    e.preventDefault();
    const res = await createUser(idroles, idsedes, identification_type, identification_number, firstname, lastname,address,phone, email,password)
    console.log('res createUser: ', res);
    setIdroles('');
    setIdsedes('');
    setIdentification_type('');
    setIdentification_number('');
    setFirstname('');
    setLastname('');
    setAddress('');
    setPhone('');
    setEmail('');
    setPassword('');
  } catch(error) {
    console.log('error: ', error);
  } finally{}
}

export const handleSubmitCreateArea = async () => {
  try{} catch(error) {
    console.log('error: ', error);
  } finally{}
}

export const handleSubmitCreateSubArea = async () => {
  try{} catch(error) {
    console.log('error: ', error);
  } finally{}
}

export const handleSubmitCreateCostCenter = async () => {
  try{} catch(error) {
    console.log('error: ', error);
  } finally{}
}