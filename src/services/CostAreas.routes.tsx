import axios from "axios";
import Routes from './Routes';
import { getHeader, set } from "../components/tools/SesionSettings";



export const getCostArea = async () => {
  try{
    const response = await axios.post(Routes.api.centerCost.area.getCostArea,{
      api_key: import.meta.env.VITE_API_KEY,
    }, getHeader())
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}
export const createCostArea = async () => {
  try{
    const response = await axios.post(Routes.api.centerCost.area.createCostArea,{
      "cost_center_area":"022",
      "cost_center_area_name":"ADMINISTratiVo"
    }, getHeader())
    console.log('response: ', response);
    return response;
  } catch (error){
    console.log('error: ', error);
  }
}
export const editCostArea = async () => {
  try{
    const response = await axios.put(Routes.api.centerCost.area.editCostArea, getHeader())
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}
export const deleteCostArea = async () => {
  try{
    const response = await axios.delete(Routes.api.centerCost.area.deleteCostArea, getHeader())
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}
