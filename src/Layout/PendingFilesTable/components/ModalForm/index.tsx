import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "animate.css";
import {
  capitalizeFirstLatterUppercase,
  formattedAmount,
} from "../../../../Utilities/formatted.utility";
import { Divider, SelectChangeEvent } from "@mui/material";
import PreviewPDF from "../../../../components/common/PreviewPDF";
import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import InputSelectRedirectTo from "../../../../components/common/InputSelectRedirectTo";
import { getUsers } from "../../../../services/Users.routes";
import { roles } from "../../../../components/tools/SesionSettings";
import { get } from "../../../../components/tools/SesionSettings";
import { editFile } from "../../../../services/Files.routes";
import PendingTemporaryState from "../common/PendingTemporaryState";
import InputSelect from "../../../../components/common/InputSelect";
// import { optionsActivity } from "../../../../components/tools/OptionsValuesSelects";
import Approve from "../Approve/index";
import { GeneralValuesContext } from "../../../../Context/GeneralValuesContext";
import InputSelectStateFile from "../common/InputSelectStateFile";
import { getStatesFiles } from "../../../../services/StateFiles.routes";
import { useApprove } from "../../Hooks/useApprove";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  height: "80vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const listRoutesPDF = ["ruta1", "ruta2", "ruta3"];

export default function ModalInfoFile(props: any) {
  // console.log("props completas: ", props);
  // ------------------------------VARIABLES------------------------------//
  const { openModalAuth, handleOpenModalAuth } =
    useContext(GeneralValuesContext);

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
    files_registered,
    files_price,
    files_account_type,
    files_account_type_number,
    files_type,
    idfiles,
    sedes_type,
    sedes_name,
    idfiles_states,
  } = props.valueFile;

  const {
    activitySelect,
    handleActivitySelect,
    optionsActivity,
    redirectTo,
    handleRedirectTo,
    optionsRedirectTo,
  } = useApprove();

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

              <div className="flex mt-4 w-fu">
                {listRoutesPDF.map((pdf, index) => (
                  <a key={index} href={pdf} target="_blank">
                    <button className="button">
                      abrir archivo {index + 1}
                    </button>
                  </a>
                ))}
              </div>
            </section>

            <section className="flex w-full mt-2">
              <article className="w-1/2">
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
              </article>
              {(activitySelect == 2 || activitySelect == 4) && (
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
            {activitySelect == 2 && (
              <Approve
                user={props.valueFile}
                newAssigned={redirectTo}
                idfiles_state={activitySelect}
              />
            )}
            {/* {activitySelect == "RECHAZAR" && (</>) } */}
            {/* {activitySelect == "DEVOLVER" && (</>) } */}
            {activitySelect == 5 && (
              <PendingTemporaryState
                user={props.valueFile}
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
