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

function TI() {
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

  /**
   * traigo los departamentos, ciudades, cedis,
   * y almaceno en variables
   */
  const handleGetCitys = async () => {
    const departmentsResponse: any = await getCitys();
    console.log("departmentsResponse: ", departmentsResponse);
    setListDepartment(departmentsResponse?.Department);

    setListCitys(departmentsResponse?.DepartamentCity);
    setAllCitys(departmentsResponse?.DepartamentCity);

    const allCedis: AllCedis[] = await getCedis();
    console.log("allCedis: ", allCedis);
    setOptionsCedisIdName(allCedis);

    const allRoles = await getRoles();
    console.log("allRoles: ", allRoles);
    setOptionsRol(allRoles);
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

  const handleRol = (e: SelectChangeEvent) => {
    setAssignRole(e.target.value);
    console.log(e.target.value);
  };
  const handleCedi = (e: SelectChangeEvent) => {
    const cedi = e.target.value;
    console.log(e.target.value);
    // @ts-ignore
    setCedi(cedi.idsedes);
  };
  const handleCedity = (e: SelectChangeEvent) => {
    setIdentificationType(e.target.value);
  };

  const handleSubmitCreateUser = async (
    e: any,
    idroles: number,
    setIdroles: any,
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
    setPassword: any
  ) => {
    try {
      setPreLoad(true);
      e.preventDefault();
      console.log(
        idroles,
        idsedes,
        identification_type,
        identification_number,
        firstname,
        lastname,
        address,
        phone,
        email,
        password
      );
      const res = await createUser(
        idroles,
        idsedes,
        identification_type,
        identification_number,
        firstname,
        lastname,
        address,
        phone,
        email,
        password
      );
      console.log("res createUser: ", res);
      if (res?.status == 200 && res.statusText == "OK") {
        setIdroles("");
        setIdsedes("");
        setIdentification_type("");
        setIdentification_number("");
        setFirstname("");
        setLastname("");
        setAddress("");
        setPhone("");
        setEmail("");
        setPassword("");
        setModalSuccess(true);
      }
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
    }
  };
  const handleCloseModalChild = () => setModalSuccess(false);

  // --------------------------handles-------------------------------//
  useEffect(() => {
    handleGetCitys();
  }, []);

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
                  <Tab label="Inicio" {...a11yProps(0)} />
                  <Tab label="Crear Cedi" {...a11yProps(1)} />
                  <Tab label="Crear Usuario" {...a11yProps(2)} />
                  <Tab label="Crear Centro de Costos" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={showValue} index={0}>
                <h3 className="font-bold text-2xl">
                  Panel Administrativo de Creacion
                </h3>
              </TabPanel>
              <TabPanel value={showValue} index={1}>
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
                    {listDepartment && (
                      <article className="md:w-1/2">
                        <InputSelectOnlyValue
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
                    )}
                    {listDepartment && (
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
                    )}
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
                        // iconEnd={}
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
              <TabPanel value={showValue} index={2}>
                <form
                  onSubmit={() =>
                    handleSubmitCreateUser(
                      event,
                      assignRole,
                      setAssignRole,
                      cedi,
                      setCedi,
                      identificationType,
                      setIdentificationType,
                      identificationNumber,
                      setIdentificationNumber,
                      firstName,
                      setFirstname,
                      lastName,
                      setLastName,
                      addressUser,
                      setAddressUser,
                      phone,
                      setPhone,
                      email,
                      setEmail,
                      password,
                      setPassword
                    )
                  }
                >
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <InputSelectRol
                        type={"text"}
                        title="Asignar Rol"
                        placeholder="Rol"
                        name="role"
                        required
                        value={assignRole}
                        onChange={handleRol}
                        itemDefault="selecciona una opcion"
                        items={optionsRol}
                      />
                    </article>
                    <article className="md:w-1/2">
                      <InputSelectCedi
                        type={"text"}
                        title="Asignar Cedi"
                        placeholder="Cedi"
                        name="cedi"
                        required
                        value={cedi}
                        onChange={handleCedi}
                        itemDefault="selecciona una opcion"
                        items={optionsCedisIdName}
                      />
                    </article>
                  </div>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <InputSelectDocType
                        type={"text"}
                        title="Tipo de Documento"
                        placeholder="C.C, NIT..."
                        name="type"
                        required
                        value={identificationType}
                        onChange={handleCedity}
                        itemDefault="selecciona un tipo"
                      />
                    </article>

                    {/* <article className="md:w-1/2">
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
                    </article> */}
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
                <ModalSuccess
                  open={modalSuccess}
                  close={handleCloseModalChild}
                  setModalSuccess={setModalSuccess}
                  type={"Usuario"}
                  identification={firstName}
                />
              </TabPanel>
              <TabPanel value={showValue} index={3}>
                <form
                  onSubmit={(e) =>
                    handleSubmitCreateArea(
                      e,
                      areaNumber,
                      setAreaNumber,
                      areaName,
                      setAreaName
                    )
                  }
                >
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Numero Area
                      </label>
                      <TextFieldOutlined
                        type={"number"}
                        label={"numero"}
                        value={areaNumber}
                        setValue={setAreaNumber}
                        required
                      />
                    </article>
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Nombre Area
                      </label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Nombre"}
                        value={areaName}
                        setValue={setAreaName}
                        required
                        // iconEnd={}
                      />
                    </article>
                  </div>
                  <Button name="Crear Centro De Costos" />
                </form>

                <form onSubmit={() => handleSubmitCreateSubArea()}>
                  <div className="md:flex md:flex-wrap">
                    <article className="md:w-1/2">
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                        Numero Sub-Area
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
                        Nombre Sub-Area
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
                        Relacion Area
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
                        Numero Centro de Costos
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
                        Nombre Centro de Costos
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
                        Relacion Sub-Area
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
