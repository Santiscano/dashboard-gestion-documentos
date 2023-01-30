import React from 'react'
import SpeedDial from '../components/SpeedDial';
import './layout.css';
import Input from '@mui/material/Input';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// components
import Selected from '../components/Selected'

const ariaLabel = { 'aria-label': 'description' };

function index() {

  // methods
  const [request, setRequest] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setRequest(event.target.value);
    console.log('request: ',request);
  };


  return (
    <section className='layout'>
      
      <h3 className='nameRol text-lg font-bold'>Nombre Rol</h3>
      
      {/* Radicado */}
      <section className='filing'>
        <div>
          <label className="block mb-2 text-base font-semibold dark:text-white" >Cargar Archivo</label>
          <input className="inputFile block text-sm text-gray-900 border border-solid border-color rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Archivo PDF</p>
        </div>
        
        <div>
          <label className="block mb-2 mt-10 text-base font-semibold dark:text-white" >Seleccionar Area</label>
          <FormControl sx={{ m: 1, minWidth:250 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Requerimiento</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={request}
              onChange={handleChange}
              autoWidth
              label="Requerimiento"
              
            >
              <MenuItem value="">
                <em>Proceso</em>
              </MenuItem>
              <MenuItem value={"administrativo"} sx={{ m: 1, maxWidth:250 ,minWidth: 350 }}>Administrativo</MenuItem>
              <MenuItem value={"operativo"} sx={{ m: 1, maxWidth:250 ,minWidth: 350 }}>Operativo</MenuItem>
            </Select>
          </FormControl>
        </div>

        {request == 'administrativo' && <div className='flex flex-wrap flex-column justify-between'>
          <article >
            <label className="block mb-2 mt-10 text-base font-semibold dark:text-white" >Nombre Proveedor</label>
            <Selected/>
          </article>
          <article className='w-1/2'>
            <label className="block mb-2 mt-10 text-base font-semibold dark:text-white" >A quien va Dirigido</label>
            <Selected/>
          </article>

        </div> }
        
      </section>
      
      {/* inputs upload files  */}
      <section></section>
      
      {/* speedDial T.I */}
      <Box>
        {/* <SpeedDial/> */}
      </Box>



    </section>
  )
}

export default index
