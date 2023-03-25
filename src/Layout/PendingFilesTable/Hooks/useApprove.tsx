import { SelectChangeEvent } from "@mui/material";
import { useState, useEffect } from "react";
import { get, roles } from "../../../components/tools/SesionSettings";
import { getStatesFiles } from "../../../services/StateFiles.routes";
import { getUsers } from "../../../services/Users.routes";

export const useApprove = () => {
  // ------------------------------VARIABLES------------------------------//
  const [comments, setComments] = useState("");
  const [openPDF, setOpenPdf] = useState(false);
  const [redirectTo, setRedirectTo] = useState<number>();
  const [allUsers, setAllUsers] = useState([""]); // recibi todos los usuarios de DB
  const [optionsRedirectTo, setOptionsRedirectTo] = useState([""]); // filtro allUsers con opciones redirectTo
  const [activitySelect, setActivitySelect] = useState<any>(); //valor opcion seleccionada de actividad a realizar
  const [optionsActivity, setOptionsActivity] = useState<any>();
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
    setAllUsers(getAllUsers);

    // options redirectTo Administration
    const filterAuditors = getAllUsers?.filter(
      (user: { idroles: number; idusers: number }) =>
        (user.idroles == roles.AuditorGH ||
          user.idroles == roles.AuditorCRTL ||
          user.idroles == roles.AuditorRG ||
          user.idroles == roles.Gerencia ||
          user.idroles == roles.Contaduria ||
          user.idroles == roles.Tesoreria) &&
        user.idusers !== Number(get("idusers"))
    );
    setOptionsRedirectTo(filterAuditors);

    // get states files
    const getAllStates = await getStatesFiles();
    const states = getAllStates?.data.states;

    Number(get("idroles")) == 3
      ? isGH(states)
      : Number(get("idroles")) == 4
      ? isCRTL(states)
      : Number(get("idroles")) == 5
      ? isRG(states)
      : Number(get("idroles")) == 6
      ? isGerencia(states)
      : Number(get("idroles")) == 7
      ? isContaduria(states)
      : Number(get("idroles")) == 8
      ? isTesoreria(states)
      : "";

    if (Number(get("idroles")) == 3) {
      return isGH(states);
    } else if (Number(get("idroles")) == 4) {
      return isCRTL(states);
    } else if (Number(get("idroles")) == 5) {
      return isRG(states);
    } else if (Number(get("idroles")) == 6) {
      return isGerencia(states);
    } else if (Number(get("idroles")) == 7) {
      return isContaduria(states);
    } else if (Number(get("idroles")) == 8) {
      return isTesoreria(states);
    }
  };

  const isGH = (stateList: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 3 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);
  };
  const isCRTL = (stateList: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 3 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);
  };
  const isRG = (stateList: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 3 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);
  };
  const isGerencia = (stateList: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 4 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);
  };
  const isContaduria = (stateList: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 5 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);
  };
  const isTesoreria = (stateList: any) => {
    const view = stateList.filter(
      (state: { idfiles_states: number }) =>
        state.idfiles_states == 6 ||
        state.idfiles_states == 7 ||
        state.idfiles_states == 8 ||
        state.idfiles_states == 9 ||
        state.idfiles_states == 10
    );
    setOptionsActivity(view);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return {
    activitySelect,
    handleActivitySelect,
    optionsActivity,
    redirectTo,
    handleRedirectTo,
    optionsRedirectTo,
  };
};
