import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridFilterModel, GridToolbar, GridRenderCellParams, GridToolbarContainer, GridToolbarFilterButton, GridToolbarColumnsButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import BasicModal from '../ModalForm';
import pdf from '../../../assets/Requerimientos.pdf';
import { ButtonToggleOpenEdit } from '../ButtonToggleOpenEdit';


let open:boolean = false
const openModalPDF = (params:any) =>{
  console.log('open: ', open);
  let parameters = params;
  console.log('parameters: ', parameters);
  open = true;
  console.log('open: ', open);
}
const openPdf = () => {
  console.log('funcionando')
  window.open(pdf);
}
const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'Radicado', 
    width: 170,
    filterable: true,
  },
  { 
    field: 'cedi', 
    headerName: 'Cedi', 
    width: 110,
    filterable: true,
  },
  {
    field: 'account_type',
    headerName: 'Tipo de cuenta',
    width: 165,
  },
  { field: 'document_type', 
    headerName: 'Tipo de documento', 
    width: 130, 
  },
  { field: 'document_number', 
    headerName: 'Numero de documento', 
    width: 150 
  },
  {
    field: 'provider',
    headerName: 'Razon social',
    width: 180,
  },
  {
    field: 'address',
    headerName: 'Direccion',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Numero de Telefono',
    width: 140,
  },
  {
    field: 'email',
    headerName: 'Correo electronico',
    width: 200,
  },
  {
    field: 'document_date',
    headerName: 'Fecha de Documento',
    width: 140,
  },
  {
    field: 'value',
    headerName: 'valor',
    width: 140,
  },
  {
    field: 'action',
    headerName: 'Acciones',
    width:90,
    filterable: false,
    renderCell: ButtonToggleOpenEdit,
  }
];

const rows = [
  { id: "CAL2023020112345", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12345678", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020212346", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020314345", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020412344", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020512343", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020612342", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020712341", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020812340", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
  { id: "CAL2023020912347", cedi:"barranquilla", account_type:"Cuenta cobro proveedor", document_type:"NIT", document_number:"12312343", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
];

function GridToolbarConfig() {
  return (
    <div>
      <GridToolbarColumnsButton style={{color:"#000", marginLeft: "17px",}}/>
      <GridToolbarFilterButton style={{color: "#000", marginLeft: "17px",}} />
      <GridToolbarExport style={{color: "#000", marginLeft: "17px",}}/>
    </div>
  )
}



export default function DataGridDemo() {
  
  return (
    <>
      <div className='flex flex-row justify-between'>
        <label className="block mb-2 ml-4 text-base font-semibold dark:text-white">Todos Radicados</label>
      </div>
      <Box sx={{ height: "90%", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbarConfig,
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                account_type: false,
                address: false,
                phone: false,
                email: false,
                document_date: false,
              },
            }
          }}
        />
      </Box>
    </>
  );
}