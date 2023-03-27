import { SelectChangeEvent } from "@mui/material";
import { useState, useEffect } from "react";
import { get, roles } from "../../../components/tools/SesionSettings";
import { getStatesFiles } from "../../../services/StateFiles.routes";
import { getUsers } from "../../../services/Users.routes";

export const useModalForm = () => {
  // ------------------------------VARIABLES------------------------------//
  const [comments, setComments] = useState("");
  const [openPDF, setOpenPdf] = useState(false);
  const [redirectTo, setRedirectTo] = useState<number>();
  const [allUsers, setAllUsers] = useState([""]); // recibi todos los usuarios de DB
  const [optionsRedirectTo, setOptionsRedirectTo] = useState([""]); // filtro allUsers con opciones redirectTo
  const [activitySelect, setActivitySelect] = useState<any>(); //valor opcion seleccionada de actividad a realizar
  const [optionsActivity, setOptionsActivity] = useState<any>();
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
  // -----------------------METHODS INPUTS--------------------------------//
  const handleComments = (e: any) => setComments(e.target.value);

  const handleRedirectTo = (e: SelectChangeEvent) => {
    setRedirectTo(Number(e.target.value));
    console.log(e.target.value);
  };

  const handleActivitySelect = (e: SelectChangeEvent) =>
    setActivitySelect(e.target.value);

  const handleGetUsers = async () => {
    // users
    const getAllUsers = await getUsers();
    // console.log("getAllUsers: ", getAllUsers);
    setAllUsers(getAllUsers);

    // get states files & nextAuditor
    const getAllStates = await getStatesFiles();
    const states = await getAllStates?.data.data;
    // console.log("states: ", states);

    if (getAllUsers && states) {
      if (Number(get("idroles")) == 3) {
        return isGH(states, getAllUsers);
      } else if (Number(get("idroles")) == 4) {
        return isCRTL(states, getAllUsers);
      } else if (Number(get("idroles")) == 5) {
        return isRG(states, getAllUsers);
      } else if (Number(get("idroles")) == 6) {
        return isGerencia(states, getAllUsers);
      } else if (Number(get("idroles")) == 7) {
        return isContaduria(states, getAllUsers);
      } else if (Number(get("idroles")) == 8) {
        return isTesoreria(states, getAllUsers);
      }
    }
  };

  const isGH = (stateList: any, auditors: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 3 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);

    const nextAuditor = auditors?.filter(
      (user: { idroles: number; idusers: number }) =>
        user.idroles == roles.Gerencia
    );
    setOptionsRedirectTo(nextAuditor);
  };

  const isCRTL = (stateList: any, auditors: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 3 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);

    const nextAuditor = auditors?.filter(
      (user: { idroles: number; idusers: number }) =>
        user.idroles == roles.Gerencia
    );
    setOptionsRedirectTo(nextAuditor);
  };

  const isRG = (stateList: any, auditors: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 3 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);

    const nextAuditor = auditors?.filter(
      (user: { idroles: number; idusers: number }) =>
        user.idroles == roles.Gerencia
    );
    setOptionsRedirectTo(nextAuditor);
  };

  const isGerencia = (stateList: any, auditors: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 4 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);

    const nextAuditor = auditors?.filter(
      (user: { idroles: number; idusers: number }) =>
        user.idroles == roles.Contaduria
    );
    setOptionsRedirectTo(nextAuditor);
  };

  const isContaduria = (stateList: any, auditors: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 5 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);

    const nextAuditor = auditors?.filter(
      (user: { idroles: number; idusers: number }) =>
        user.idroles == roles.Tesoreria
    );
    setOptionsRedirectTo(nextAuditor);
  };

  const isTesoreria = (stateList: any, auditors: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 6 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);

    const nextAuditor = auditors?.filter(
      (user: { idroles: number; idusers: number }) =>
        user.idroles == roles.Eliminar
    );
    setOptionsRedirectTo(nextAuditor);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return {
    activitySelect,
    setActivitySelect,
    handleActivitySelect,
    optionsActivity,
    redirectTo,
    setRedirectTo,
    handleRedirectTo,
    optionsRedirectTo,
    style,
  };
};
