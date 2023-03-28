import Button from "@mui/material/Button";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { GeneralValuesContext } from "../Context/GeneralValuesContext";
import ButtonModalEdit from "../Layout/PendingFilesTable/components/common/ButtonModalEdit";
import { ButtonOpenModalEdit } from "../Layout/PendingFilesTable/components/common/ButtonOpenModalEdit";
import ModalInfoFile from "../Layout/PendingFilesTable/components/ModalForm";
import { formattedAmount } from "../Utilities/formatted.utility";

// const columns = () => {}
const columns: GridColDef[] = [
  {
    field: "files_registered",
    headerName: "Radicado",
    width: 230,
  },
  {
    field: "files_account_type",
    headerName: "Tipo de Factura",
    width: 150,
  },
  {
    field: "files_account_type_number",
    headerName: "Numero de Factura",
    width: 130,
  },
  {
    field: "files_code_accounting",
    headerName: "Nombre",
    width: 70,
  },
  {
    field: "users_name",
    headerName: "Razon Social",
    width: 120,
  },
  {
    field: "files_cost_center",
    headerName: "Centro de Costo",
    width: 150,
  },
  {
    field: "files_code_treasury",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "files_price",
    headerName: "Precio",
    width: 100,
    valueFormatter: (params) => formattedAmount(params.value),
  },
  {
    field: "files_type",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "idfiles",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "idfiles_states",
    headerName: "Estado Archivo",
    width: 105,
  },
  {
    field: "files_states",
    headerName: "Estado Archivo",
    width: 190,
  },
  {
    field: "idproviders",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "idroles",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "idsedes",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "idusers",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "sedes_address",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "sedes_city",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "sedes_country",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "sedes_name",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "sedes_type",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_address",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_email",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_identification",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_identification_digital_check",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_identification_type",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_lastname",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_phone",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_providers_expiration_date",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_providers_paydays",
    headerName: "nombre",
    width: 70,
  },
  {
    field: "users_status",
    headerName: "Estado del Usuario",
    width: 70,
    filterable: true,
  },
  {
    field: "action",
    headerName: "Acciones",
    width: 90,
    filterable: false,
    renderCell: (cellValues: any) => ButtonModalEdit(cellValues),
    // renderCell: (cellValues: any) => {
    //   return (
    //     <>
    //       <Button
    //         component="button"
    //         variant="contained"
    //         size="small"
    //         style={{ marginLeft: 1 }}
    //         onKeyDown={(event: React.KeyboardEvent) => {
    //           if (event.key === " ") {
    //             // Prevent key navigation when focus is on button
    //             event.stopPropagation();
    //           }
    //         }}
    //         onClick={(event) => {
    //           console.log("result: ", event, cellValues);
    //         }}
    //       >
    //         ver valores
    //       </Button>
    //       <ModalInfoFile
    //         key={}
    //         open={openModalAuth}
    //         close={handleOpenModalAuth}
    //         valueFile={params.row}
    //       />
    //     </>
    //   );
    // },
    // renderCell: ButtonOpenModalEdit,
  },
];

export default columns;
