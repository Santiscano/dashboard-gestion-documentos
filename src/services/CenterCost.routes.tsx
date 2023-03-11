import axios from "axios";
import Routes from './Routes';
import { getHeader, set } from "../components/tools/SesionSettings";


/**
 * AREA
 */
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
      "cost_center_area_name":"admonimoninononomo"
    }, getHeader())
    console.log('response: ', response);
    return response;
  } catch (error){
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
/**
 * SUBAREA
 */
export const getCostSubArea = async () => {
  try{
    const response = await axios.get(Routes.api.centerCost.subArea.getCostSubArea, getHeader())
    console.log('response:', response);
    return response;
  } catch(error) {
    console.log('error: ', error);
  }
};
export const createCostSubArea= async () => {
  try{
    const response = await axios.get(Routes.api.centerCost.subArea.createCostSubArea, getHeader())
    console.log('response:', response);
    return response;
  } catch(error) {
    console.log('error: ', error);
  }
};
export const deleteCostSubArea= async () => {
  try{
    const response = await axios.get(Routes.api.centerCost.subArea.deleteCostSubArea, getHeader())
    console.log('response:', response);
    return response;
  } catch(error) {
    console.log('error: ', error);
  }
};
/**
 * CENTRO DE COSTOS
 */
export const getCostCenter = async () => {
  try{
    const response = await axios.get(Routes.api.centerCost.CenterCost.getCostCenter, getHeader())
    console.log('response:', response);
    return response;
  } catch(error) {} finally {}
};
export const createCostCenter = async () => {
  try{
    const response = await axios.get(Routes.api.centerCost.CenterCost.createCostCenter, getHeader())
    console.log('response:', response);
    return response;
  } catch(error) {
    console.log('error: ', error);
  }
};
export const deleteCostCenter = async () => {
  try{
    const response = await axios.get(Routes.api.centerCost.CenterCost.deleteCostCenter, getHeader())
    console.log('response:', response);
    return response;
  } catch(error) {
    console.log('error: ', error);
  }
};
