import React, { useState } from 'react'
import SpeedDial from '../components/SpeedDial';
import './layout.css';
import Input from '@mui/material/Input';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// components
import InputSelect from '../components/InputSelect';
import Upload from '../components/Upload';
import DataTable from '../components/DataTable' 


const ariaLabel = { 'aria-label': 'description' };

function index() {

  // method selected
  const [request, setRequest] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setRequest(event.target.value);
    console.log('request: ',request);
  };

  /**
   * Array type props to FormControl
   * firt array is static
   */
  // Assigned area
  const [area, setArea] = useState('')
  const handleArea = (e: SelectChangeEvent) => {setArea(e.target.value);}
  const optionsArea = [
    {name:'Administrativo', value: 'administrativo'},
    {name:'Operativo', value: 'operativo'},
  ];

  /** array of items params formControl dinamics from DB
   * options provider and redirecTo
   */
  // provider
  const [provider, setProvider] = useState('')
  const handleProvider = (e: SelectChangeEvent) => {setProvider(e.target.value);}
  const optionsProvider = [
    {name: 'Servientrega', value: 'servientrega'},
    {name: 'Exito medellin', value: 'exitoMDL'},
  ]

  // redirecto
  const [redirectTo, setRedirectTo] = useState('')
  const handleRedirectTo = (e: SelectChangeEvent) => {setRedirectTo(e.target.value);}
  const optionsRedirectTo = [
    {name: 'Gerente', value: 'gerente'},
    {name: 'Auditor', value: 'auditor'}
  ]
  

  return (
    <section className='layout'>
      
      <h3 className='nameRol text-lg font-bold'>Nombre Rol</h3>
      
      <section className='filing'>
        {/* Radicado - archivo PDF */}
        <Upload/>
        <div>
          <InputSelect
            index='1'
            title='Seleccionar Area'
            placeholder="Requerimiento"
            value={area} 
            onChange={handleArea}
            itemDefault="selecciona una opcion"
            items={optionsArea}
          />
        </div>

        {/* option administrativo */}
        {area == 'administrativo' && 
        <div className='flex flex-wrap flex-column justify-between'>
          <article >
            <InputSelect 
              index="2"
              title='Nombre Proveedor'
              placeholder="proveedor"
              value={provider}
              onChange={handleProvider}
              itemDefault="selecciona una opcion"
              items={optionsProvider}/>
          </article>
          <article className='w-1/2'>
            <InputSelect 
              index="3"
              title='A quien va Dirigido'
              placeholder="dirigido"
              value={redirectTo}
              onChange={handleRedirectTo}
              itemDefault="selecciona una opcion"
              items={optionsRedirectTo}/>
          </article>
        </div> }

        {/* option operativo */}  
        {area == 'operativo' && <div>aun no hay informacion</div>}
      </section>
      
      {/* table  */}
      <section className='filing'>
        <DataTable/>
      </section>
      
      {/* speedDial T.I */}
      <Box>
        {/* <SpeedDial/> */}
      </Box>



    </section>
  )
}

export default index
