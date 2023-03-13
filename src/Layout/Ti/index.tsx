import { useEffect, useState } from "react";
import "./TI.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { SelectChangeEvent } from "@mui/material/Select";
import { TabPanelProps } from "../../interfaces/TabPanel";
import TextFieldOutlined from "../../components/common/TextFieldOutline";
import Button from "../../components/common/Button";
import {
  handleSubmitCreateRol,
  handleSubmitCreateCedi,
  handleSubmitCreateUser,
  handleSubmitCreateCostArea,
  handleSubmitCreateCostSubArea,
  handleSubmitCreateCostCenter,
} from "./Submits";
import InputSelect from "./../../components/common/InputSelect/index";
import { optionCediType } from "../../components/tools/OptionsValuesSelects";
import InputSelectCountry from "../../components/common/InputSelectCity";
import { getCitys } from './../../services/getCitysColombia';
import InputSelectCity from "../../components/common/InputSelectCity";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TI() {
  const [showValue, setShowValue] = useState(0);
  // create rol
  const [rolName, setRolName] = useState("");
  const [rolDescription, setRolDescription] = useState("");
  // create cedi
  const [department, setDepartment] = useState("");
  const [listDepartment, setListDepartment] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [listCitys, setListCitys] = useState<any>('');
  const [allCitys, setAllCitys] = useState<any>('');
  const [address, setAddress] = useState("");
  const [cediName, setCediName] = useState("");
  const [type, setType] = useState("");
  // create user
  const [assignRole, setAssignRole] = useState<number>();
  const [idSedes, setIdSedes] = useState<number>();
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressUser, setAddressUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // create Area Cost
  const [costCenterArea, setCostCenterArea] = useState("");
  const [costCenterAreaName, setCostCenterAreaName] = useState("");
  // create subArea
  const [idcostCenterArea, setIdcostCenterArea ] = useState("");
  const [costCenterSubarea, setCostCenterSubarea] = useState("");
  const [costCenterSubareaName, setCostCenterSubareaName] = useState("");
  // create Center Cost
  const [idCostCenterSubarea, setIdCostCenterSubarea] = useState("");
  const [costCenter, setCostCenter] = useState("");
  const [costCenterName, setCostCenterName] = useState("");

  // --------------------------handles-------------------------------//
  /**
   * metodo para pasar entre crear rol, cedi.... etc
   * @param e
   * @param newValue
   */
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setShowValue(newValue);
  };

  /**
   * traigo los departamentos y almaceno en listas igual para ciudades
   */
  const handleGetCitys = async () => {
    const departmentsResponse = await getCitys();
    setListDepartment(departmentsResponse?.Department);

    setListCitys(departmentsResponse?.DepartamentCity);
    setAllCitys(departmentsResponse?.DepartamentCity);
  };
  const handleDepartment = (e: SelectChangeEvent) => {
    setCity('');
    setDepartment(e.target.value);

    // @ts-ignore
    const filterCity = allCitys.filter(location => location.departamento === e.target.value )
    // @ts-ignore
    setListCitys(filterCity);
  };
  const handleCity =  (e: SelectChangeEvent) => {
    setCity(e.target.value);
  };



  const handleCediType = (e: SelectChangeEvent) => {
    setType(e.target.value);
  };


  // --------------------------handles-------------------------------//
  useEffect(() => {
    handleGetCitys();
  },[])

  return (
    <div className="layout">
      <section className="layout-section">
        <div className="layout-left">
          <div className="container__createFiling">
            <h3 className="createFiling">
              Administracion & Gestion de Plataforma TI
            </h3>
            <code> {department[0]}  </code>
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
                  <Tab label="Crear Rol" {...a11yProps(0)} />
                  <Tab label="Crear Cedi" {...a11yProps(1)} />
                  <Tab label="Crear Usuario" {...a11yProps(2)} />
                  <Tab label="Crear Centro de Costos" {...a11yProps(3)} />
                  {/* <Tab label="Crear sub Area" {...a11yProps(4)} /> */}
                  {/* <Tab label="Crear Centro de costos" {...a11yProps(5)} /> */}
                </Tabs>
              </Box>
              <TabPanel value={showValue} index={0}>
                <form
                  onSubmit={() =>
                    handleSubmitCreateRol(
                      event,
                      rolName, setRolName,
                      rolDescription, setRolDescription
                    )
                  }
                >
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Nombre del Rol
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre Rol"}
                        value={rolName}
                        setValue={setRolName}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Descripcion del rol
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Descripcion del Rol"}
                        value={rolDescription}
                        setValue={setRolDescription}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <Button name="Crear Rol" />
                </form>
              </TabPanel>
              <TabPanel value={showValue} index={1}>
                <form
                  onSubmit={() =>
                    handleSubmitCreateCedi(
                      event,
                      department, setDepartment,
                      city, setCity,
                      address, setAddress,
                      cediName, setCediName,
                      type, setType
                    )
                  }
                >
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <InputSelect
                        type={"text"}
                        name="departament"
                        title='Departamento'
                        placeholder='Seleccione el Departamento'
                        required
                        value={department}
                        onChange={handleDepartment}
                        itemDefault='Selecciona el Departamento'
                        items={listDepartment}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <InputSelectCity
                        type={"text"}
                        name="city"
                        title='Ciudad'
                        placeholder='Seleccione la Ciudad'
                        required
                        disabled={!department}
                        value={city}
                        onChange={handleCity}
                        itemDefault='Selecciona el Departamento'
                        items={listCitys}
                      />
                      {/* <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Ciudad
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre Pais"}
                        value={city}
                        setValue={setCity}
                        required
                        // iconEnd={}
                      /> */}
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
                        // iconEnd={}
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
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <InputSelect
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
              <TabPanel value={showValue} index={2}>
                <form onSubmit={() => handleSubmitCreateUser(
                  event,
                  // @ts-ignore
                  assignRole, setAssignRole,
                  idSedes, setIdSedes,
                  identificationType, setIdentificationType,
                  identificationNumber, setIdentificationNumber,
                  firstName, setFirstname,
                  lastName, setLastName,
                  addressUser, setAddressUser,
                  phone, setPhone,
                  email, setEmail,
                  password, setPassword
                )}>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Asignar Rol
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Role"}
                        value={assignRole}
                        setValue={setAssignRole}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Asignar Cedi
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Cedi"}
                        value={idSedes}
                        setValue={setIdSedes}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Tipo de Documento
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"C.C, NIT ..."}
                        value={identificationType}
                        setValue={setIdentificationType}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Numero de documento
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Numero"}
                        value={identificationNumber}
                        setValue={setIdentificationNumber}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Nombres
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre"}
                        value={firstName}
                        setValue={setFirstname}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Apellidos
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Apellidos"}
                        value={lastName}
                        setValue={setLastName}
                        required
                        // iconEnd={}
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
                        label={"Direccion"}
                        value={addressUser}
                        setValue={setAddressUser}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Telefono
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"numero"}
                        value={phone}
                        setValue={setPhone}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Correo Electronico
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Email"}
                        value={email}
                        setValue={setEmail}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Contraseña
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"contraseña"}
                        value={password}
                        setValue={setPassword}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <Button name="Crear Usuario" />
                </form>
              </TabPanel>
              <TabPanel value={showValue} index={3}>
                <form onSubmit={(e) => handleSubmitCreateCostArea(e)}>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Centro De Costos
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Numero"}
                        value={costCenterArea}
                        setValue={setCostCenterArea}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Nombre Centro De Costos
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre"}
                        value={costCenterAreaName}
                        setValue={setCostCenterAreaName}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <Button name="Crear Centro De Costos" />
                </form>

                <form onSubmit={() => handleSubmitCreateCostSubArea()}>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Id Centro De Costos
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Area"}
                        value={idcostCenterArea}
                        setValue={setIdcostCenterArea}
                        required
                        // iconEnd={}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        C.C SubArea
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"SubArea"}
                        value={costCenterSubarea}
                        setValue={setCostCenterSubarea}
                        required
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Nombre subArea
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre"}
                        value={costCenterSubareaName}
                        setValue={setCostCenterSubareaName}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                </form>
                <Button name="Crear SubArea" />

                <form onSubmit={() => handleSubmitCreateCostCenter()}>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Id SubArea
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"ID"}
                        value={idCostCenterSubarea}
                        setValue={setIdCostCenterSubarea}
                        required
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Centro de Costos
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"centro de costos"}
                        value={costCenter}
                        setValue={setCostCenter}
                        required
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Nombre Centro de Costos
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre"}
                        value={costCenterName}
                        setValue={setCostCenterName}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                </form>
                <Button name="Crear Usuario" />
              </TabPanel>
            </Box>
          </article>
        </div>
      </section>
    </div>
  );
}

export default TI;
