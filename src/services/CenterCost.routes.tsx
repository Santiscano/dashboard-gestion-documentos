import axios from "axios";
import Routes from "./Routes";
import { getHeader, set } from "../components/tools/SesionSettings";
import { numberToStringWithTwoDigitNumber as numberToString } from "../Utilities/formatted.utility";

/**
 * AREA
 */
export const getArea = async () => {
  try {
    const response = await axios.post(
      Routes.api.centerCost.area.getCostArea,
      {
        api_key: import.meta.env.VITE_API_KEY,
      },
      getHeader()
    );
    console.log("response: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const createArea = async (
  cost_center_area: string,
  cost_center_area_name: string
) => {
  try {
    const response = await axios.post(
      Routes.api.centerCost.area.createCostArea,
      {
        cost_center_area,
        cost_center_area_name,
      },
      getHeader()
    );
    console.log("response: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const deleteArea = async () => {
  try {
    const response = await axios.delete(
      Routes.api.centerCost.area.deleteCostArea,
      getHeader()
    );
    console.log("response: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
/**
 * SUBAREA
 */
export const getCostSubArea = async () => {
  try {
    const response = await axios.post(
      Routes.api.centerCost.subArea.getCostSubArea,
      { api_key: import.meta.env.VITE_API_KEY },
      getHeader()
    );
    console.log("response:", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const getCostSubAreaById = async (id: any) => {
  try {
    const response = await axios.post(
      Routes.api.centerCost.subArea.getCostSubAreaById,
      {
        api_key: import.meta.env.VITE_API_KEY,
        idcost_center_area: id,
      },
      getHeader()
    );
    console.log("response:", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const createCostSubArea = async () => {
  try {
    const response = await axios.get(
      Routes.api.centerCost.subArea.createCostSubArea,
      getHeader()
    );
    console.log("response:", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const deleteCostSubArea = async () => {
  try {
    const response = await axios.get(
      Routes.api.centerCost.subArea.deleteCostSubArea,
      getHeader()
    );
    console.log("response:", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
/**
 * CENTRO DE COSTOS
 */
export const getCostCenter = async () => {
  try {
    const response = await axios.post(
      Routes.api.centerCost.CenterCost.getCostCenter,
      // @ts-ignore
      { api_key: import.meta.env.VITE_API_KEY },
      // @ts-ignore
      getHeader()
    );
    console.log("getCostCenter:", response);
    return response;
  } catch (error) {
  } finally {
  }
};
export const getCostCenterById = async (id: any) => {
  try {
    const response = await axios.post(
      Routes.api.centerCost.CenterCost.getCostCenterById,
      // @ts-ignore
      {
        api_key: import.meta.env.VITE_API_KEY,
        idcost_center_subarea: id,
      },
      // @ts-ignore
      getHeader()
    );
    console.log("getCostCenter:", response);
    return response;
  } catch (error) {
  } finally {
  }
};
export const createCostCenter = async () => {
  try {
    const response = await axios.get(
      Routes.api.centerCost.CenterCost.createCostCenter,
      getHeader()
    );
    console.log("response:", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const deleteCostCenter = async () => {
  try {
    const response = await axios.get(
      Routes.api.centerCost.CenterCost.deleteCostCenter,
      getHeader()
    );
    console.log("response:", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
