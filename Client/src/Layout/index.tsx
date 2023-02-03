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
import { Button } from '@mui/material';
import Preview from '../components/Preview';


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
    <>
      {/* radicacion */}
      <section className='layout'>
        <div className='layout-left'>
          <div className='container__createFiling'>
            <h3 className='createFiling'>Crear Nuevo radicado</h3>
            <SpeedDial/>
          </div>
          <section className='filing'>
            {/* Radicado - archivo PDF */}
            <Upload/>
            <div className='w-full'>
              <InputSelect
                index='1'
                title='Seleccionar Area'
                placeholder="Requerimiento"
                value={area} 
                onChange={handleArea}
                itemDefault="selecciona una opcion"
                items={optionsArea}/>
            </div>

            {/* option administrativo */}
            {area == 'administrativo' && 
            <div>
              <div className='md:flex md:flex-wrap'>
                <article className='md:w-1/2' >
                  <InputSelect 
                    index="2"
                    title='Nombre Proveedor'
                    placeholder="proveedor"
                    value={provider}
                    onChange={handleProvider}
                    itemDefault="selecciona una opcion"
                    items={optionsProvider}/>
                </article>
                <article className='md:w-1/2'>
                  <InputSelect 
                    index="3"
                    title='A quien va Dirigido'
                    placeholder="dirigido"
                    value={redirectTo}
                    onChange={handleRedirectTo}
                    itemDefault="selecciona una opcion"
                    items={optionsRedirectTo}/>
                </article>
              </div>
            <button className='button button--flex'>Crear requerimientos</button>
          </div>
            }

            {/* option operativo */}  
            {area == 'operativo' && <div>aun no hay informacion</div>}
          </section>
        </div>
      </section>



      {/* table & pdf */}
      <section className='layout'>
        {/* left */}
        <div className='layout-left'>
          <h3 className='container__createFiling createFiling'>Dashboard</h3>
          <section className='viewTable'>
            <DataTable/>
          </section>
        </div>

        {/* right */}
        <div className='layout-right'>
          <section className='previewPdf'>
            <Preview/>
          </section>
          <Box>
            {/* <SpeedDial/> */}
          </Box>
        </div>
      </section>

      

      
    </>
  )
}

export default index
