import { useState } from 'react'
import SpeedDial from '../components/SpeedDial'
import './layout.css';
import { Box } from '@mui/system';
import { SelectChangeEvent } from '@mui/material/Select';

// components
import InputSelect from '../components/InputSelect';
import Upload from '../components/Upload';
import DataTable from '../components/DataTable' 
import Preview from '../components/Preview';
import Button from '../components/Button';


function index() {

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
  
  // radicado valor
  const [settled, setSettled] = useState('')
  const handleSettled = () => {setSettled('valor'); console.log(settled)}
  
  const handleSubmit = (e:any) => {
    console.log(e)
    e.preventDefault();
  }


  return (

    <div className='layout'>


      <section className='layout-section'>
        <div className='layout-left'>
          <div className='container__createFiling'>
            <h3 className='createFiling'>Crear Nuevo radicado</h3>
          </div>
          {settled == '' ? 
          <article className='filing'>
            <Button
              name="Generar numero Radicado"
              onClick={handleSettled}
              />
          </article> :
          <article className='filing'>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">llenar</label>
              <input type="text"  />
              <input type="submit" value='enviar' />
            </form>
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

            {area == 'operativo' && <div>aun no hay informacion</div>}
          </article>}
        </div>
      </section>



      <section className='layout-section'>
        <div className='layout-left'>
          <h3 className='container__createFiling createFiling'>Dashboard</h3>
          <section className='viewTable'>
            <DataTable/>
          </section>
        </div>

        <div className='layout-right'>
          <section className='previewPdf'>
            <Preview/>
          </section>
        </div>
      </section>  

      

      
    </div>
  )
}

export default index
