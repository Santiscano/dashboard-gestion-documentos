import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridFilterModel, GridToolbar, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import BasicModal from '../ModalForm';

// component
import { ButtonToggleOpen } from '../ButtonToggleOpen'
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';

// pdf
import pdf from '../../../assets/Requerimientos.pdf';




let open:boolean = false

const openModalPDF = (params:any) =>{
  console.log('open: ', open);
  let parameters = params;
  console.log('parameters: ', parameters);
  open = true;
  console.log('open: ', open);
}

// fullscreen
const openPdf = () => {
  console.log('funcionando')
  window.open(pdf);
}


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Radicado', width: 170 },
  {
    field: 'provider',
    headerName: 'Proveedor',
    width: 200,
    editable: false,
  },
  {
    field: 'stateFile',
    headerName: 'Estado Archivo',
    width: 120,
    editable: false,
  },
  {
    field: 'action',
    headerName: 'Abrir',
    width:100,
    renderCell: ButtonToggleOpen,
  }
];

const rows = [
  { id: "MED2023020112345", provider: 'servientrega proovedora sas', stateFile: 'Jon', },
  { id: "MED2023020212346", provider: 'Lannister', stateFile: 'Cersei', },
  { id: "MED2023020314345", provider: 'carrulla', stateFile: 'Jaime', },
  { id: "MED2023020412344", provider: 'Stark', stateFile: 'Arya', },
  { id: "MED2023020512343", provider: 'Targaryen', stateFile: 'Daenerys', },
  { id: "MED2023020612342", provider: 'Melisandre', stateFile: "renoberta", },
  { id: "MED2023020712341", provider: 'Clifford', stateFile: 'Ferrara', },
  { id: "MED2023020812340", provider: 'Frances', stateFile: 'Rossini', },
  { id: "MED2023020912347", provider: 'Roxie', stateFile: 'Harvey', },
];

export default function DataGridDemo() {
  
  return (
    <>
      <div className='flex flex-row justify-between'>
        <label className="block mb-2 ml-4 text-base font-semibold dark:text-white">Radicados</label>
        {/* <div className='mr-4'>
          <FullscreenOutlinedIcon sx={{color:"#6b7280"}} onClick={openPdf} className="cursor-pointer"/>
        </div> */}
      </div>
      <Box sx={{ height: "90%", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />

      </Box>
    </>
  );
}