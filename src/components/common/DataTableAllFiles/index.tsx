import Box from '@mui/material/Box';
import { DataGrid, GridToolbarFilterButton, GridToolbarColumnsButton, GridToolbarExport } from '@mui/x-data-grid';
import pdf from '../../../assets/Requerimientos.pdf';
import columns from '../../../interfaces/GridColumns';
import LoadingMUI from '../LoadingMUI';
import NotFound from '../../../assets/images/file-searching.gif'
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


export default function DataTableAllFiles({row}:any) {

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