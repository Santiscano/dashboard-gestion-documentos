import { useState } from 'react'
import './provider.css';
import { SelectChangeEvent } from '@mui/material/Select';
import InputSelect from '../../components/common/InputSelect';
import Upload from '../../components/common/Upload';
import DataTable from '../../components/common/DataTable' 
import Preview from '../../components/common/Preview';
import Button from '../../components/common/Button';
import TextFieldOutlined from '../../components/common/TextFieldOutline';
import { InputLabel } from '@mui/material';
import { optionsCities, 
  optionsArea, 
  optionsProvider, 
  optionsRedirectTo, 
  optionTypeAccount } from '../../components/Json/Provider';

function index() {
  // states
  const [isCity, setIsCity] = useState('');
  const [citySelected, setCitySelected] = useState('');
  const [based, setBased] = useState('');
  const [date, setDate] = useState('');
  const [typeAccount, setTypeAccount ] = useState('');
  const [nitCedula, setNitCedula ] = useState('');
  
  const [area, setArea] = useState('');
  const [provider, setProvider] = useState('');
  const [redirectTo, setRedirectTo] = useState('');


  // handles
  const handleIsCity = (e: SelectChangeEvent) => {
    setIsCity('hola');
    setBased(`01-${citySelected}-20230207-1130`);
    handleDate();
  };
  const handleCitySelected = (e: SelectChangeEvent) => {setCitySelected(e.target.value)}
  const handleDate = () => {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    const today = `${d}/${m}/${y}`;
    setDate(today);
    console.log('today: ', today);
  }
  const handleTypeAccount = (e: SelectChangeEvent) => {setTypeAccount(e.target.value)}


  const handleArea = (e: SelectChangeEvent) => {setArea(e.target.value);}
  const handleProvider = (e: SelectChangeEvent) => {setProvider(e.target.value);}
  const handleRedirectTo = (e: SelectChangeEvent) => {setRedirectTo(e.target.value);}
  const handleSubmit = (e:any) => { console.log(e); e.preventDefault(); }

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
            </article> 
            :
            <article className='filing'>
              <form action="" onSubmit={handleSubmit}>
                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Numero de Radicado</label>
                <TextFieldOutlined
                  type={"text"}
                  label={"radicado"}
                  value={based}
                  setValue={setBased}
                  required
                  disabled
                />

                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Fecha Radicacion</label>
                <TextFieldOutlined
                  type={"text"}
                  label={"radicado"}
                  value={date}
                  setValue={setDate}
                  required
                  disabled
                />
                <InputSelect
                  type={"text"}
                  title='Tipo de cuenta'
                  placeholder="cuenta de cobro, factura proveedor, manifiesto"
                  value={typeAccount} 
                  onChange={handleTypeAccount}
                  itemDefault="selecciona una opcion"
                  items={optionTypeAccount}
                />

                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >NIT o Cedula</label>
                <TextFieldOutlined
                  type={"text"}
                  label={"radicado"}
                  value={nitCedula}
                  setValue={setNitCedula}
                  required
                  disabled
                />
                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Razon social</label>

                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Direccion</label>
                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Telefono</label>
                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Email</label>

                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Numero identificador Documento</label>
                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Fecha documento</label>

                <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" 
                  >Valor</label>

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





              </form>









            <Upload/>
            

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
