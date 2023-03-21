import { createRol } from "../../services/Roles.routes";
import { createCedi } from "../../services/Cedis.routes";
import { createUser } from '../../services/Users.routes'
import { createArea } from "../../services/CenterCost.routes";
import { numberToStringWithTwoDigitNumber as numberToString } from "../../Utilities/formatted.utility";

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
  setIdsedes:any,
  identification_type: string,
  setIdentification_type:any,
  identification_number: string,
  setIdentification_number:any,
  firstname: string,
  setFirstname:any,
  lastname: string,
  setLastname:any,
  address: string,
  setAddress:any,
  phone: string,
  setPhone:any,
  email: string,
  setEmail:any,
  password: string,
  setPassword:any,
) => {
  // console.log(idroles, idsedes, identification_type, identification_number, firstname, lastname,address,phone, email,password)
  try{
    // console.log(idroles, idsedes)
    e.preventDefault();
    const res = await createUser(idroles, idsedes, identification_type, identification_number, firstname, lastname,address,phone, email,password)
    console.log('res createUser: ', res);
    if(res?.status == 200 && res.statusText == 'OK') {
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
    }
  } catch(error) {
    console.log('error: ', error);
  } finally{}
}

export const handleSubmitCreateArea = async (e:any, areaNumber:number, setAreaNumber:any, areaName:string, setAreaName:any) => {
  try{
    e.preventDefault();
    const response = await createArea(numberToString(areaNumber), areaName);
    // console.log('response: ', response);
    if(response?.status == 200){
      setAreaNumber('');
      setAreaName('');
    }
    return response;
  } catch(error) {
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
