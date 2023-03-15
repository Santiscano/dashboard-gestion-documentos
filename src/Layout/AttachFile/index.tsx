import Button from "../../components/common/Button";
import Upload from "../../components/common/Upload";
import TextFieldOutlined from "../../components/common/TextFieldOutline";
import { useContext, useState } from "react";
import { GeneralValuesContext } from "./../../Context/GeneralValuesContext";
import {
  SearchWithDocument,
  SearchWithSettled,
} from "./../../services/SearchFile.routes";
import LoadingMUI from "../../components/common/LoadingMUI";
import InputSelect from "./../../components/common/InputSelect";
import { optionAccountType } from "../../components/tools/OptionsValuesSelects";
import { SelectChangeEvent } from "@mui/material/Select";
import { TabPanel, a11yProps } from "../../components/tools/MultiViewPanel";
import "./AttachFile.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { capitalizeFirstLatterUppercase } from "../../Utilities/formatted.utility";
// const optionAccountType = ["CUENTA COBRO", "FACTURA PROVEEDOR"];

function AttachFile() {
  // ------------ STATES ---------------//
  const [showValue, setShowValue] = useState(0);
  const [settled, setSettled] = useState("");
  const [document, setDocument] = useState({
    type: "",
    number: "",
  });
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState({
    accountType: "",
    accountNumber: "",
    settled: "",
    fileType: "",
    email: "",
    phone: "",
    address: "",
    cediName: "",
    identificationType: "",
    identificationNumber: "",
  });
  const [newPDF, setNewPDF] = useState({
    file: "",
    name: "",
  });
  const { setPreLoad } = useContext(GeneralValuesContext);

  // --------------SETSTATES ---------------//
  const onType = (newValue: any) => {
    setDocument({
      ...document,
      type: newValue,
    });
  };
  const onNumber = (newValue: any) => {
    setDocument({
      ...document,
      number: newValue,
    });
  };
  const onClean = () => {
    setDocument({
      ...document,
      type: "",
      number: "",
    });
  };
  const onFile = (newValue: any) => {
    console.log("newValue: ", newValue);
    setFile({
      accountType: newValue.files_account_type,
      accountNumber: newValue.files_account_type_number,
      settled: newValue.files_registered,
      fileType: newValue.files_type,
      email: newValue.users_email,
      phone: newValue.users_phone,
      address: newValue.users_address,
      cediName: newValue.sedes_name,
      identificationType: newValue.users_identification_type,
      identificationNumber: newValue.users_identification,
    });
  };
  const onNewFilePDF = (newValue: any) => {
    setNewPDF({
      ...newPDF,
      file: newValue,
    });
  };
  const onNewFileName = (newValue: any) => {
    setNewPDF({
      ...newPDF,
      name: newValue,
    });
  };

  // ------------- HANDLES --------------//
  /**
   * metodo para pasar entre crear rol, cedi.... etc
   * @param e
   * @param newValue
   */
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setShowValue(newValue);
  };
  // const handleAccountType = (e: SelectChangeEvent) => {
  //   onType(e.target.value);
  // };

  const handleSubmitSettled = async (e: any) => {
    try {
      console.log("se activo handleSubmitSettled");
      setPreLoad(true);
      e.preventDefault();
      const searchFile = await SearchWithSettled(settled);
      searchFile?.data.radicado[0] ? setSuccess(true) : setSuccess(false);
      onFile(searchFile?.data.radicado[0]);
      console.log("searchFile: ", searchFile?.data.radicado);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
      // onClean();
    }
  };

  const handleSubmitDocumentType = async (e: any) => {
    try {
      setPreLoad(true);
      e.preventDefault();
      const searchFile = await SearchWithDocument(
        document.type,
        document.number
      );
      console.log("searchFile: ", searchFile);
      searchFile?.data.response[0] ? setSuccess(true) : setSuccess(false);
      onFile(searchFile?.data.response[0]);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setPreLoad(false);
      // onClean();
    }
  };
  const handleFileSubmitAddPDF = async (e: any) => {
    try {
      e.preventDefault();
      console.log("file:", newPDF.file);
    } catch (error) {
    } finally {
    }
  };
  /**
   * metodo para mostrar a la vista el nombre del archivo seleccionado
   * @param e
   */
  const handleChangeFile = (e: SelectChangeEvent) => {
    // @ts-ignore
    console.log("archivo capturado", e.target.files[0]);
    // @ts-ignore
    onNewFilePDF(e.target.files[0]);
    const fileNameEvent = e.target.value.replace(/^.*\\/, ""); // renombrar archivo
    onNewFileName(fileNameEvent);
  };

  return (
    <div className="layout">
      <div>
        <LoadingMUI />
        <section className="layout-section">
          <div className="layout-left">
            <div className="container__createFiling">
              <h3 className="createFiling">Buscar un Archivo</h3>
            </div>
            <article className="filing-attachFile">
              <Box sx={{ with: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={showValue}
                    onChange={handleChange}
                    aria-label="Area TI"
                    variant="scrollable"
                  >
                    <Tab label="Filtrar Por radicado" {...a11yProps(0)} />
                    <Tab
                      label="Filtrar por Tipo y Numero de Documento"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={showValue} index={0}>
                  <Box>
                    <form onSubmit={handleSubmitSettled}>
                      <div className="md:flex md:flex-wrap">
                        <article className="md:w-1/2">
                          <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                            Numero de Radicado
                          </label>
                          <TextFieldOutlined
                            type={"text"}
                            label={"Radicado"}
                            value={settled}
                            setValue={setSettled}
                            required
                            // iconEnd={<PermIdentityRoundedIcon />}
                          />
                        </article>
                      </div>
                      <Button name="Buscar Archivo" />
                    </form>
                  </Box>
                </TabPanel>
                <TabPanel value={showValue} index={1}>
                  <Box>
                    <form onSubmit={handleSubmitDocumentType}>
                      <div className="md:flex md:flex-wrap">
                        <article className="md:w-1/2">
                          <InputSelect
                            type={"text"}
                            title="Tipo de cuenta"
                            placeholder="cuenta de"
                            required
                            value={document.type}
                            // onChange={handleAccountType}
                            onChange={(e: SelectChangeEvent) =>
                              onType(e.target.value)
                            }
                            itemDefault="selecciona el tipo de cuenta"
                            items={optionAccountType}
                          />
                        </article>
                        <article className="md:w-1/2">
                          <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white">
                            Numero de Documento
                          </label>
                          <TextFieldOutlined
                            type={"text"}
                            label={"Numero"}
                            value={document.number}
                            setValue={onNumber}
                            required
                            // iconEnd={<PermIdentityRoundedIcon />}
                          />
                        </article>
                      </div>
                      <Button name="Buscar Archivo" />
                    </form>
                  </Box>
                </TabPanel>
              </Box>
              {/* {!success && <div>hola</div>} */}
            </article>
            {success && (
              <>
                <article className="filing">
                  <div className="flex mt-4">
                    <p className="font-bold inline-block mr-4 w-1/2">
                      Tipo De Cuenta:
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(file.accountType)}`}
                      </span>
                    </p>
                    <p className="font-bold inline-block mr-4">
                      Numero de Cuenta:
                      <span className="text-slate-600 font-normal">
                        {` ${file.accountNumber}`}
                      </span>
                    </p>
                  </div>
                  <div className="flex mt-4">
                    <p className="font-bold inline-block mr-4 w-1/2">
                      Numero Radicado
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(file.settled)}`}
                      </span>
                    </p>
                    <p className="font-bold inline-block mr-4">
                      Tipo de Archivo
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(file.fileType)}`}
                      </span>
                    </p>
                  </div>
                  <div className="flex mt-4">
                    <p className="font-bold inline-block mr-4 w-1/2">
                      Email
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(file.email)}`}
                      </span>
                    </p>
                    <p className="font-bold inline-block mr-4">
                      Telefono
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(file.phone)}`}
                      </span>
                    </p>
                  </div>
                  <div className="flex mt-4">
                    <p className="font-bold inline-block mr-4 w-1/2">
                      Direccion
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(file.address)}`}
                      </span>
                    </p>
                    <p className="font-bold inline-block mr-4">
                      Nombre Cedi
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(file.cediName)}`}
                      </span>
                    </p>
                  </div>
                  <div className="flex mt-4">
                    <p className="font-bold inline-block mr-4 w-1/2">
                      Tipo de Identificacion
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(
                          file.identificationType
                        )}`}
                      </span>
                    </p>
                    <p className="font-bold inline-block mr-4">
                      Numero de Identificacion
                      <span className="text-slate-600 font-normal">
                        {` ${capitalizeFirstLatterUppercase(
                          file.identificationNumber
                        )}`}
                      </span>
                    </p>
                  </div>
                </article>
                <article className="filing-attachFile">
                  <form onSubmit={handleFileSubmitAddPDF}>
                    <Upload
                      file={newPDF.file}
                      fileName={newPDF.name}
                      handleChangeFile={handleChangeFile}
                    />
                    <Button name="adjuntar nuevo archivo" />
                  </form>
                </article>
              </>
            )}
          </div>
        </section>
      </div>

      <h3>info usuario e input con comentario y boton enviar</h3>
    </div>
  );
}

export default AttachFile;
