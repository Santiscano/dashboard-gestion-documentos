import { useContext, useEffect, useState } from "react";
import "./TI.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SelectChangeEvent } from "@mui/material/Select";
import TextFieldOutlined from "../../components/common/TextFieldOutline";
import Button from "../../components/common/Button";
import {
  handleSubmitCreateRol,
  handleSubmitCreateCedi,
  // handleSubmitCreateUser,
  handleSubmitCreateArea,
  handleSubmitCreateSubArea,
  handleSubmitCreateCostCenter,
} from "./Submits";
import InputSelect from "./../../components/common/InputSelect/index";
import { optionCediType } from "../../components/tools/OptionsValuesSelects";
import { getCitys } from "./../../services/getCitysColombia";
import InputSelectCity from "../../components/common/InputSelectCity";
import InputSelectCedi from "../../components/common/InputSelectCedi";
import InputSelectDocType from "../../components/common/InputSelectDocType";
import { AllCedis } from "../../interfaces/Cedis";
import { getCedis } from "../../services/Cedis.routes";
import { getRoles } from "../../services/Roles.routes";
import InputSelectRol from "../../components/common/InputSelectRol";
import { TabPanel, a11yProps } from "../../components/tools/MultiViewPanel";
import { numberToStringWithTwoDigitNumber as numberToString } from "../../Utilities/formatted.utility";
import LoadingMUI from "../../components/common/LoadingMUI";
import { createUser } from "../../services/Users.routes";
import { GeneralValuesContext } from "./../../Context/GeneralValuesContext";
import ModalSuccess from "../../components/common/ModalSuccess";
import InputSelectOnlyValue from "../../components/common/InputSelectOnlyValue";
import { get, roles } from "../../components/tools/SesionSettings";

function Admin() {
  const [showValue, setShowValue] = useState(0);
  // create rol
  const [rolName, setRolName] = useState("");
  const [rolDescription, setRolDescription] = useState("");
  // create cedi
  const [department, setDepartment] = useState("");
  const [listDepartment, setListDepartment] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [listCitys, setListCitys] = useState<any>("");
  const [allCitys, setAllCitys] = useState<any>("");
  const [address, setAddress] = useState("");
  const [cediName, setCediName] = useState("");
  const [type, setType] = useState("");
  // create user
  const [assignRole, setAssignRole] = useState<any>();
  const [optionsRol, setOptionsRol] = useState<any>([]);
  const [cedi, setCedi] = useState<any>();
  const [optionsCedisIdName, setOptionsCedisIdName] = useState<any>([]);
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressUser, setAddressUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // create Area Cost
  const [areaNumber, setAreaNumber] = useState<number>(NaN);
  const [areaName, setAreaName] = useState("");

  // create subArea
  const [idcostCenterArea, setIdcostCenterArea] = useState("");
  const [costCenterSubarea, setCostCenterSubarea] = useState("");
  const [costCenterSubareaName, setCostCenterSubareaName] = useState("");
  // create Center Cost
  const [idCostCenterSubarea, setIdCostCenterSubarea] = useState("");
  const [costCenter, setCostCenter] = useState("");
  const [costCenterName, setCostCenterName] = useState("");
  // success
  const [modalSuccess, setModalSuccess] = useState(false); // status 200 filePath para mostrar hijo modal

  // --------------------------context-------------------------------//

  const { setPreLoad } = useContext(GeneralValuesContext);

  // --------------------------handles-------------------------------//
  /**
   * metodo para pasar entre crear rol, cedi.... etc
   * @param e
   * @param newValue
   */
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setShowValue(newValue);
  };
  const handleDepartment = (e: SelectChangeEvent) => {
    setCity("");
    setDepartment(e.target.value);

    // @ts-ignore
    const filterCity = allCitys.filter(
      (location: any) => location.departamento === e.target.value
    );
    // @ts-ignore
    setListCitys(filterCity);
  };
  const handleCity = (e: SelectChangeEvent) => setCity(e.target.value);
  const handleCediType = (e: SelectChangeEvent) => setType(e.target.value);

  return (
    <div className="layout">
      <LoadingMUI />
      <section className="layout-section">
        <div className="layout-left">
          <div className="container__createFiling">
            <h3 className="createFiling">
              Administracion & Gestion de Plataforma Web
            </h3>
            <h3 className="createFiling">
              falta hacer funcional crear centro de costos
            </h3>
          </div>
          <article className="filing-ti">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={showValue}
                  onChange={handleChange}
                  aria-label="Area TI"
                  variant="scrollable"
                >
                  <Tab label="Crear Cedi" {...a11yProps(0)} />
                  <Tab label="Crear Usuario" {...a11yProps(1)} />
                  <Tab label="Crear Centro de Costos" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={showValue} index={0}>
                <form
                  onSubmit={() =>
                    handleSubmitCreateCedi(
                      event,
                      department,
                      setDepartment,
                      city,
                      setCity,
                      address,
                      setAddress,
                      cediName,
                      setCediName,
                      type,
                      setType
                    )
                  }
                >
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <InputSelect
                        type={"text"}
                        name="departament"
                        title="Departamento"
                        placeholder="Seleccione el Departamento"
                        required
                        value={department}
                        onChange={handleDepartment}
                        itemDefault="Selecciona el Departamento"
                        items={listDepartment}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <InputSelectCity
                        type={"text"}
                        name="city"
                        title="Ciudad"
                        placeholder="Seleccione la Ciudad"
                        required
                        disabled={!department}
                        value={city}
                        onChange={handleCity}
                        itemDefault="Selecciona el Departamento"
                        items={listCitys}
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Direccion
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Direccion Ubicacion"}
                        value={address}
                        setValue={setAddress}
                        required
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Nombre Cedi
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Cedi"}
                        value={cediName}
                        setValue={setCediName}
                        required
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <InputSelectOnlyValue
                        type={"text"}
                        title="Tipo de Cedi"
                        placeholder="Propio - Nacional"
                        required
                        value={type}
                        onChange={handleCediType}
                        itemDefault="selecciona el tipo de Cedi"
                        items={optionCediType}
                      />
                    </article>
                  </div>
                  <Button name="Crear Cedi" />
                </form>
              </TabPanel>
            </Box>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Admin;
