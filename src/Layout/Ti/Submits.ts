import { createRol } from "../../services/Roles.routes";


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

export const handleSubmitCreateCedi = async () => {
  try{} catch(error) {
    console.log('error: ', error);
  } finally{}
}

export const handleSubmitCreateUser = async () => {
  try{} catch(error) {
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
