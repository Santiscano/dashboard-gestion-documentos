import axios from "axios";
import Routes from './Routes'


export const getCostArea = async () => {
  try{
    const response = await axios.post(Routes.api.centerCost.area.getCostArea,{
      "api_key": "37323a416eb548626b3e668255c4d436"
    })
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
    })
    console.log('response: ', response);
    return response;
  } catch (error){
    console.log('error: ', error);
  }
}
export const editCostArea = async () => {
  try{
    const response = await axios.put(Routes.api.centerCost.area.editCostArea,{})
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}
export const deleteCostArea = async () => {
  try{
    const response = await axios.delete(Routes.api.centerCost.area.deleteCostArea, {})
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}
