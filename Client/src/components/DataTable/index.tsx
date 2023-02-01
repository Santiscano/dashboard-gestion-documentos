import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridFilterModel, GridToolbar, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import BasicModal from '../ModalForm';

// component
import { ButtonToggleOpen } from '../ButtonToggleOpen'




let open:boolean = false

const openModalPDF = (params:any) =>{
  console.log('open: ', open);
  let parameters = params;
  console.log('parameters: ', parameters);
  open = true;
  console.log('open: ', open);
}


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Radicado', width: 150 },
  {
    field: 'provider',
    headerName: 'Proveedor',
    width: 200,
    editable: false,
  },
  {
    field: 'stateFile',
    headerName: 'Estado Archivo',
    width: 200,
    editable: false,
  },
  {
    field: 'responsive',
    headerName: 'Responsable Proceso',
    type: 'string',
    width: 220,
    editable: false,
  },
  {
    field: 'pdf',
    headerName: 'archivo',
    type: 'file',
    width: 110
  },
  {
    field: 'action',
    headerName: 'Abrir Archivo',
    width: 150,
    renderCell: ButtonToggleOpen,
  }
];

const rows = [
  { id: 1, provider: 'Snow', stateFile: 'Jon', responsive: "camilo",  },
  { id: 2, provider: 'Lannister', stateFile: 'Cersei', responsive: "santiago",  },
  { id: 3, provider: 'Lannister', stateFile: 'Jaime', responsive: "andres",  },
  { id: 4, provider: 'Stark', stateFile: 'Arya', responsive: "stiven",  },
  { id: 5, provider: 'Targaryen', stateFile: 'Daenerys', responsive: "sergio",  },
  { id: 6, provider: 'Melisandre', stateFile: null, responsive: "daniel",  },
  { id: 7, provider: 'Clifford', stateFile: 'Ferrara', responsive: "david",  },
  { id: 8, provider: 'Frances', stateFile: 'Rossini', responsive: "carlos",  },
  { id: 9, provider: 'Roxie', stateFile: 'Harvey', responsive: "felipe",  },
];

export default function DataGridDemo() {
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />

    </Box>
  );
}