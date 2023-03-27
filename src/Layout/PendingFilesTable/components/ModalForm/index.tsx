import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "animate.css";
import {
  capitalizeFirstLatterUppercase,
  formattedAmount,
} from "../../../../Utilities/formatted.utility";
import { Divider, Tooltip } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import InputSelectRedirectTo from "../../../../components/common/InputSelectRedirectTo";
import PendingTemporaryState from "../common/PendingTemporaryState";
import Approve from "../Approve/index";
import { GeneralValuesContext } from "../../../../Context/GeneralValuesContext";
import InputSelectStateFile from "../common/InputSelectStateFile";
import { useModalForm } from "../../Hooks/useModalForm";
import { SearchWithSettled } from "./../../../../services/SearchFile.routes";

// const listRoutesPDF = [
//   {
//     idfiles_path: 4,
//     idfiles: 183,
//     files_path:
//       "https://storage.cloud.google.com/digitalizacion-enviexpress-bucket/radicacion/administrativo/183-MEDELLÍN-2732023T8:55:22AM-1.pdf?authuser=3",
//     files_path_date: "2023-03-27T13:57:06.000Z",
//     files_path_observation: "FLUJO 1 GH",
//   },
//   {
//     idfiles_path: 5,
//     idfiles: 183,
//     files_path:
//       "https://storage.cloud.google.com/digitalizacion-enviexpress-bucket/radicacion/administrativo/183-MEDELLÍN-2732023T8:55:22AM-2.pdf?authuser=3",
//     files_path_date: "2023-03-27T14:34:36.000Z",
//     files_path_observation: "ARCHIVO 2 ADJUNTADO",
//   },
//   {
//     idfiles_path: 6,
//     idfiles: 183,
//     files_path:
//       "https://storage.cloud.google.com/digitalizacion-enviexpress-bucket/radicacion/administrativo/183-MEDELLÍN-2732023T8:55:22AM-3.pdf?authuser=3",
//     files_path_date: "2023-03-27T14:35:25.000Z",
//     files_path_observation: "ARCHIVO 3 ADJUNTADO",
//   },
//   {
//     idfiles_path: 7,
//     idfiles: 183,
//     files_path:
//       "https://storage.cloud.google.com/digitalizacion-enviexpress-bucket/radicacion/administrativo/183-MEDELLÍN-2732023T8:55:22AM-4.pdf?authuser=3",
//     files_path_date: "2023-03-27T14:35:43.000Z",
//     files_path_observation: "ARCHIVO 4",
//   },
// ];

export default function ModalInfoFile(props: any) {
  console.log("props completas: ", props);
  // ------------------------------VARIABLES------------------------------//
  const [listRoutesPDF, setListRoutesPDF] = useState<any>("");
  const [viewPDF, setViewPDF] = useState(false);
  const { openModalAuth, handleOpenModalAuth, dataUser, setDataUser } =
    useContext(GeneralValuesContext);
  console.log("datauser: ", dataUser);

  const {
    users_name,
    users_lastname,
    users_identification_type,
    users_identification,
    users_identification_digital_check,
    users_email,
    users_phone,
    users_address,
    users_status,
    files_cost_center,
    files_registered,
    files_price,
    files_account_type,
    files_account_type_number,
    files_type,
    idfiles,
    sedes_type,
    sedes_name,
    idfiles_states,
  } = dataUser?.row;

  const {
    activitySelect,
    setActivitySelect,
    handleActivitySelect,
    optionsActivity,
    redirectTo,
    setRedirectTo,
    handleRedirectTo,
    optionsRedirectTo,
    style,
  } = useModalForm();

  const handleListFilesPDF = async () => {
    const getFilesFromSettled = await SearchWithSettled(files_registered);
    console.log("getFilesFromSettled: ", getFilesFromSettled);
    setListRoutesPDF(getFilesFromSettled?.data.rutas);
    getFilesFromSettled?.status == 200 && setViewPDF(true);
    // console.log("listroutesPDF", listRoutesPDF);
  };

  useEffect(() => {
    handleListFilesPDF();
  }, [openModalAuth]);

  return (
    <>
      <Modal
        open={openModalAuth}
        onClose={handleOpenModalAuth}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="animate__animated animate__fadeIn"
      >
        <Box sx={style}>
          <div className="flex justify-between mx-2">
            <h3 className="createFiling mb-2">Autorizar Radicado</h3>
          </div>
          <Divider />
          <div className="flex flex-col items-center w-auto mt-2">
            <section className="flex flex-wrap w-full items-center justify-between ">
              <div className="flex justify-between flex-wrap">
                <div className="text-2xl font-bold mr-8">
                  {capitalizeFirstLatterUppercase(users_name)}{" "}
                  {capitalizeFirstLatterUppercase(users_lastname)}
                </div>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Tipo De Documento:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(
                      users_identification_type
                    )}`}
                  </span>
                </p>
                <p className="font-bold inline-block">
                  Numero De Documento:
                  <span className="text-slate-600 font-normal">
                    {` ${users_identification}-${users_identification_digital_check}`}
                  </span>
                </p>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Email:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(users_email)}`}
                  </span>
                </p>
                <p className="font-bold inline-block">
                  Telefono:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(users_phone)}`}
                  </span>
                </p>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Direccion:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(users_address)}`}
                  </span>
                </p>
                <p className="font-bold inline-block">
                  Estado:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(users_status)}`}
                  </span>
                </p>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Radicado:{" "}
                  <span className="text-slate-600 font-normal">
                    {files_registered}
                  </span>
                </p>
                <p className="mr-8 font-bold text-lg">
                  Precio: {formattedAmount(files_price)}
                </p>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Tipo De Cuenta:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(files_account_type)}`}
                  </span>
                </p>
                <p className="font-bold inline-block mr-4">
                  Numero de Cuenta:
                  <span className="text-slate-600 font-normal">
                    {` ${files_account_type_number}`}
                  </span>
                </p>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Tipo De Archivo:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(files_type)}`}
                  </span>
                </p>
                <p className="font-bold inline-block">
                  ID Del Archivo:
                  <span className="text-slate-600 font-normal">
                    {` ${idfiles}`}
                  </span>
                </p>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Tipo de Cedi:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(sedes_type)}`}
                  </span>
                </p>
                <p className="font-bold inline-block">
                  Nombre Cedi:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase(sedes_name)}`}
                  </span>
                </p>
              </div>

              <div className="flex mt-4 w-full">
                <p className="font-bold inline-block mr-4 w-1/2">
                  Asignacion Actual:
                  <span className="text-slate-600 font-normal">
                    {` ${capitalizeFirstLatterUppercase("gerencia")}`}
                  </span>
                </p>
              </div>

              {viewPDF && (
                <div className="flex mt-4 w-fu">
                  {listRoutesPDF.map((pdf: any, index: any) => (
                    <a key={index} href={pdf.files_path} target="_blank">
                      <Tooltip
                        title={pdf.files_path_observation}
                        placement="top"
                      >
                        <button className="button">
                          abrir archivo {index + 1}
                        </button>
                      </Tooltip>
                    </a>
                  ))}
                </div>
              )}
            </section>

            <section className="flex w-full mt-2">
              <article className="w-1/2">
                {optionsActivity && (
                  <InputSelectStateFile
                    title="Estado a Generar"
                    placeholder="Seleccione una Actividad"
                    value={activitySelect}
                    onChange={handleActivitySelect}
                    required
                    name="accion"
                    itemDefault="Que Accion tomaras"
                    items={optionsActivity}
                  />
                )}
              </article>
              {/* si es Aprobar mostrara */}
              {(activitySelect == 3 ||
                activitySelect == 4 ||
                activitySelect == 5) && (
                <article className="w-1/2">
                  <InputSelectRedirectTo
                    title="Asignar A"
                    placeholder="Quien debe continuar?"
                    type={"number"}
                    required
                    value={redirectTo}
                    onChange={handleRedirectTo}
                    itemDefault="selecciona el Auditor"
                    items={optionsRedirectTo}
                  />
                </article>
              )}
            </section>

            {/* auditor aprueba a gerencia */}
            {(activitySelect == 3 ||
              activitySelect == 4 ||
              activitySelect == 5) && (
              <Approve
                user={dataUser?.row}
                newAssigned={redirectTo}
                idfiles_state={activitySelect}
                setActivitySelect={setActivitySelect}
                setRedirectTo={setRedirectTo}
              />
            )}

            {/* {activitySelect == "RECHAZAR" && (</>) } */}
            {/* {activitySelect == "DEVOLVER" && (</>) } */}
            {(activitySelect == 9 || activitySelect == 10) && (
              <PendingTemporaryState
                user={dataUser?.row}
                // closeModal={props}
              />
            )}
            {/* <section className="flex flex-row w-full">
              <article className="md:w-1/2">
                <textarea
                  name="Comentario"
                  id="comentary"
                  placeholder="Es necesario dejar alguna observacion"
                  className="border-neutral-300 border-2 resize-none w-full my-3 h-24"
                  required
                  value={comments}
                  onChange={handleComments}
                ></textarea>
              </article>
            </section>
            <h4>Aprobar "putfile idfiles_states + 1 iduser"</h4>
            <h4>Rechazar "estado rechazado"</h4>
            <h4>Devolver "enviar cualquier auditor o gerente"</h4>
            <h4>Pendiente "estado pendiente"</h4> */}
          </div>
        </Box>
      </Modal>
    </>
  );
}
