import Box from '@mui/material/Box';
import { DataGrid, GridColDef,  GridToolbarFilterButton, GridToolbarColumnsButton, GridToolbarExport } from '@mui/x-data-grid';
import pdf from '../../../assets/Requerimientos.pdf';
import columns from '../../../interfaces/GridColumns';
import LoadingMUI from '../LoadingMUI';
import NotFound from '../../../assets/images/notFound.jpg';
import { ButtonToggleOpenEdit } from '../ButtonToggleOpenEdit';
import { formattedAmount } from '../../../Utilities/formatted.utility';
import { styled } from '@mui/material';


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
// const columns: GridColDef[] = [
//   {
//     field: 'files_registered',
//     headerName: 'Radicado',
//     width: 170,
//   },
//   {
//     field: 'files_account_type',
//     headerName: 'Tipo de Factura',
//     width: 120,
//   },
//   {
//     field: 'files_account_type_number',
//     headerName: 'Numero de Factura',
//     width: 130,
//   },
//   {
//     field: 'files_code_accounting',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'files_cost_center',
//     headerName: 'Centro de Costo',
//     width: 150,
//   },
//   {
//     field: 'files_code_treasury',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'files_price',
//     headerName: 'Precio',
//     width: 150,
//     valueFormatter: (params) => formattedAmount(params.value),
//   },
//   {
//     field: 'files_type',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'idfiles',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'idfiles_states',
//     headerName: 'Estado Archivo',
//     width: 70,
//   },
//   {
//     field: 'idproviders',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'idroles',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'idsedes',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'idusers',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'sedes_address',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'sedes_city',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'sedes_country',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'sedes_name',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'sedes_type',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_address',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_email',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_identification',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_identification_digital_check',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_identification_type',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_lastname',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_name',
//     headerName: 'Razon Social',
//     width: 70,
//   },
//   {
//     field: 'users_phone',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_providers_expiration_date',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_providers_paydays',
//     headerName: 'nombre',
//     width: 70,
//   },
//   {
//     field: 'users_status',
//     headerName: 'Estado del Usuario',
//     width: 70,
//     filterable: true,
//   },
//   {
//     field: 'action',
//     headerName: 'Acciones',
//     width:90,
//     filterable: false,
//     renderCell: ButtonToggleOpenEdit,
//   }
// ];

// const rows = [
//   { id: "CAL2023020112345", cedi:"Bar", account_type:"cuenta-cobro-proveedor", document_type:"NIT", document_number:"12345678", provider: "servientrega soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020212346", cedi:"Bog", account_type:"cuenta-cobro-proveedor", document_type:"NIT", document_number:"12312343", provider: "coordinadora soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020314345", cedi:"Cal", account_type:"cuenta-cobro-proveedor", document_type:"NIT", document_number:"12312343", provider: "exviexpress  soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020412344", cedi:"Mas", account_type:"cuenta-cobro-proveedor", document_type:"NIT", document_number:"12312343", provider: "linea direct soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020512343", cedi:"Med", account_type:"factura-proveedor",      document_type:"NIT", document_number:"12312343", provider: "digitalizaci soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020612342", cedi:"Nac", account_type:"factura-proveedor",      document_type:"NIT", document_number:"12312343", provider: "westinghouse soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020712341", cedi:"Med", account_type:"factura-proveedor",      document_type:"NIT", document_number:"12312343", provider: "sweepalert21 soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020812340", cedi:"Med", account_type:"manifiesto-carga",       document_type:"NIT", document_number:"12312343", provider: "onclicksubmi soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
//   { id: "CAL2023020912347", cedi:"Med", account_type:"manifiesto-carga",       document_type:"NIT", document_number:"12312343", provider: "eboxComercio soluciones", address: "cr 50 cl 37-24", phone:"3117771234", email:"servientrega@envios.com.co", document_date:"2023-02-09", value:"$1200000"},
// ];

function GridToolbarConfig() {
  return (
    <div>
      <GridToolbarColumnsButton style={{color:"#000", marginLeft: "17px",}}/>
      <GridToolbarFilterButton style={{color: "#000", marginLeft: "17px",}} />
      <GridToolbarExport style={{color: "#000", marginLeft: "17px",}}/>
    </div>
  )
}

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

export function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <img src={NotFound} width="250px" />
    </StyledGridOverlay>
  );
}

function getRowId(row:any) {
  return row.idfiles
}

export default function DataTablePending({row}:any) {

  return (
    <>
      <div className='flex flex-row justify-between'>
        <label className="block mb-2 ml-4 text-base font-semibold dark:text-white">Todos Los Radicados</label>
      </div>
      <Box sx={{ height: "90%", width: '100%' }}>
        <LoadingMUI/>
        <DataGrid
          rows={row}
          getRowId={getRowId}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbarConfig,
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                files_code_accounting: false,
                files_code_treasury: false,
                files_type: false,
                idfiles: false,
                idproviders: false,
                idroles: false,
                idsedes: false,
                idusers: false,
                sedes_address: false,
                sedes_city: false,
                sedes_country: false,
                sedes_name: false,
                sedes_type: false,
                users_address: false,
                users_email: false,
                users_identification: false,
                users_identification_digital_check: false,
                users_identification_type: false,
                users_lastname: false,
                users_phone: false,
                users_providers_expiration_date: false,
                users_providers_paydays: false,
                users_status: false,
              },
            }
          }}
        />
      </Box>
    </>
  );
}