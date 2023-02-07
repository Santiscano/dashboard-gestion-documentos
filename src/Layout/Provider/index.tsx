import { useState } from 'react'
import './provider.css';
import { SelectChangeEvent } from '@mui/material/Select';
import InputSelect from '../../components/InputSelect';
import Upload from '../../components/Upload';
import DataTable from '../../components/DataTable' 
import Preview from '../../components/Preview';
import Button from '../../components/Button';
import TextFieldOutlined from '../../components/TextFieldOutline';

function index() {
  // states
  const [isCity, setIsCity] = useState('');
  const [citySelected, setCitySelected] = useState('');
  const [based, setBased] = useState('');
  
  
  const [area, setArea] = useState('');
  const [provider, setProvider] = useState('');
  const [redirectTo, setRedirectTo] = useState('');


  // handles
  const handleIsCity = (e: SelectChangeEvent) => {
    setIsCity('hola');
    setBased(`01-${citySelected}-20230207-1130`)
  };
  const handleCitySelected = (e: SelectChangeEvent) => {setCitySelected(e.target.value)}
  
  const handleArea = (e: SelectChangeEvent) => {setArea(e.target.value);}
  const handleProvider = (e: SelectChangeEvent) => {setProvider(e.target.value);}
  const handleRedirectTo = (e: SelectChangeEvent) => {setRedirectTo(e.target.value);}
  const handleSubmit = (e:any) => { console.log(e); e.preventDefault(); }

  // objets
  const optionsCities = [
    {name: "Barranquilla", value: "Bar"},
    {name: "Bogota", value: "Bog"},
    {name: "Cali", value: "Cal"},
    {name: "Masivos", value: "Mas"},
    {name: "Medellin", value: "Med"},
    {name: "Nacionales", value: "Nac"},
  ];


  const optionsArea = [
    {name:'Administrativo', value: 'administrativo'},
    {name:'Operativo', value: 'operativo'},
  ];
  const optionsProvider = [
    {name: 'Servientrega', value: 'servientrega'},
    {name: 'Exito medellin', value: 'exitoMDL'},
  ];
  const optionsRedirectTo = [
    {name: 'Gerente', value: 'gerente'},
    {name: 'Auditor', value: 'auditor'}
  ];

  return (
    <div className='layout'>
      <section className='layout-section'>
        <div className='layout-left'>
          <div className='container__createFiling'>
            <h3 className='createFiling'>Crear Nuevo radicado</h3>
          </div>
          {!isCity ? 
            <article className='filing'>
              <InputSelect
                type={"text"}
                title='Generar Radicado'
                placeholder="Ciudad a radicar"
                value={citySelected} 
                onChange={handleCitySelected}
                itemDefault="selecciona una opcion"
                items={optionsCities}
              />
              <Button
                name="Generar numero Radicado"
                onClick={handleIsCity}
                />
            </article> :
            <article className='filing'>
              <form action="" onSubmit={handleSubmit}>
                <TextFieldOutlined
                  type={"text"}
                  label={"radicado"}
                  value={based}
                  setValue={setBased}
                  required
                  disabled
                />
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
