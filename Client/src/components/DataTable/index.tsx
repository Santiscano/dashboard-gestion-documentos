import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridFilterModel, GridToolbar, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';


const handlePDF = (params:any) =>{

  console.log("params evento pdf: ", params)
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
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Button
        variant='contained'
        size="small"
        tabIndex={params.hasFocus ? 0 : -1}
        onClick ={() => handlePDF(params)}
      >
        Abrir
      </Button>
    )
  }
];

const rows = [
  { id: 1, provider: 'Snow', stateFile: 'Jon', responsive: "santiago",  },
  { id: 2, provider: 'Lannister', stateFile: 'Cersei', responsive: "santiago",  },
  { id: 3, provider: 'Lannister', stateFile: 'Jaime', responsive: "santiago",  },
  { id: 4, provider: 'Stark', stateFile: 'Arya', responsive: "santiago",  },
  { id: 5, provider: 'Targaryen', stateFile: 'Daenerys', responsive: "santiago",  },
  { id: 6, provider: 'Melisandre', stateFile: null, responsive: "santiago",  },
  { id: 7, provider: 'Clifford', stateFile: 'Ferrara', responsive: "santiago",  },
  { id: 8, provider: 'Frances', stateFile: 'Rossini', responsive: "santiago",  },
  { id: 9, provider: 'Roxie', stateFile: 'Harvey', responsive: "santiago",  },
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