import { useEffect, useState } from 'react'
import './provider.css';
import { SelectChangeEvent } from '@mui/material/Select';
import InputSelect from '../../components/common/InputSelect';
import Upload from '../../components/common/Upload';
import DataTable from '../../components/common/DataTable'
import Preview from '../../components/common/Preview';
import Button from '../../components/common/Button';
import TextFieldOutlined from '../../components/common/TextFieldOutline';
import { optionsCities,
  optionsInvoiceType,
  optionsProvider,
  optionsRedirectTo,
  optionAccountType,
  optionDocumentType } from '../../components/Objects/Provider';
import DataTableEditable from '../../components/common/DataTableEditable';

import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import BrandingWatermarkRoundedIcon from '@mui/icons-material/BrandingWatermarkRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';

import 'animate.css';
import { useForm } from 'react-hook-form';
import { getCedis } from '../../services/Cedis.routes';


function index() {
  // states
  const [isSettled, setIsSettled]         = useState(false);
  const [cedi, setCedi]                   = useState('');
  const [settledNumber, setSettledNumber] = useState('');
  const [accountType, setAccountType ]    = useState('');
  const [documentType, setDocumentType ]  = useState('');
  const [documentNumber,setDocumentNumber]= useState('');
  const [companyName, setCompanyName]     = useState('');
  const [address, setAddress]             = useState('');
  const [telephone, setTelephone]         = useState('');
  const [email, setEmail]                 = useState('');
  const [documentDate, setDocumentDate]   = useState('');
  const [price, setPrice]                 = useState('');
  const [invoiceType, setInvoiceType]     = useState('');
  const [provider, setProvider]           = useState('');
  const [redirectTo, setRedirectTo]       = useState('');
  const [role, setRole ]                  = useState('radicacion');


  // handles
  const handleSettledSubmit = (e:any) => {
    const documentType = e.target.documentType.value;
    const documentNumber = e.target.documentNumber.value;
    const cedi = e.target.cedi.value;
    console.log(e.target.value)
    setIsSettled(true);
    setSettledNumber(`10699001-${cedi}-20230207-1130`);
    e.preventDefault();
  };


  const handleCedi = (e: SelectChangeEvent) => {setCedi(e.target.value)};
  const handleAccountType = (e: SelectChangeEvent) => {setAccountType(e.target.value)};
  const handleDocumentType = (e: SelectChangeEvent) => {setDocumentType(e.target.value)};
  const handleInvoiceType = (e: SelectChangeEvent) => {
    setInvoiceType(e.target.value);
    console.log("invoice", invoiceType)
    invoiceType == "operativo"
    ? setRedirectTo("auditor grupo operativo")
    : setRedirectTo("")
    console.log('invoiceType: ', invoiceType);

  };
  const handleProvider = (e: SelectChangeEvent) => {setProvider(e.target.value)};
  const handleRedirectTo = (e: SelectChangeEvent) => {setRedirectTo(e.target.value)};
  const handleRedirectToOperationalGroup = (e: SelectChangeEvent) => {setRedirectTo("auditor grupo operativo")};

  // USE EFFECT - render inputs - DESCOMENTAR CUANDO SEPA CUALES ASIGNAR AQUI
  // useEffect(() => {
  //   getCedis();
  // },[])

  return (
    <div className='layout'>
      {role == "radicacion" &&
      <div>
        <section className='layout-section'>
          <div className='layout-left'>
            <div className='container__createFiling'>
              <h3 className='createFiling'>Crear Nuevo radicado</h3>
            </div>
            {!isSettled
              ?
              <article className='filing'>
                <form onSubmit={handleSettledSubmit}>
                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <InputSelect
                        type={"text"}
                        name="documentType"
                        title='Tipo Documento'
                        placeholder="Tipo Documento*"
                        value={documentType}
                        onChange={handleDocumentType}
                        itemDefault="selecciona el tipo de documento"
                        items={optionDocumentType}
                      />
                    </article>
                    <article className='md:w-1/2'>
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Numero Documento</label>
                      <TextFieldOutlined
                        type={"text"}
                        name="documentNumber"
                        label={"Numero documento"}
                        value={documentNumber}
                        setValue={setDocumentNumber}
                        required
                        iconEnd={<BrandingWatermarkRoundedIcon/>}
                      />
                    </article>
                  </div>
                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <input type="text"
                      name='prueba' />
                      <InputSelect
                        type={"text"}
                        title='Ciudad a Radicar'
                        placeholder="Ciudad a radicar"
                        name="cedi"
                        value={cedi}
                        onChange={handleCedi}
                        itemDefault="selecciona una opcion"
                        items={optionsCities}
                      />
                    </article>
                  </div>
                  <Button
                    name="Generar numero Radicado"
                  >
                  </Button>
                </form>
              </article>
              :
              <article className='filing'>
                <form >
                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Numero de Radicado</label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"radicado"}
                        value={settledNumber}
                        setValue={setSettledNumber}
                        required
                        disabled
                        iconEnd={<NumbersRoundedIcon/>}
                      />
                    </article>
                    <article className='md:w-1/2' >
                      <InputSelect
                        type={"text"}
                        title='Tipo de cuenta'
                        placeholder="cuenta"
                        value={accountType}
                        onChange={handleAccountType}
                        itemDefault="selecciona el tipo de cuenta"
                        items={optionAccountType}
                      />
                    </article>
                  </div>

                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <InputSelect
                        type={"text"}
                        title='Tipo Documento'
                        placeholder="Tipo Documento*"
                        value={documentType}
                        onChange={handleDocumentType}
                        itemDefault="selecciona el tipo de documento"
                        items={optionDocumentType}
                      />
                    </article>
                    <article className='md:w-1/2'>
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Numero Documento</label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Numero documento"}
                        value={documentNumber}
                        setValue={setDocumentNumber}
                        required
                        iconEnd={<BrandingWatermarkRoundedIcon/>}
                      />
                    </article>
                  </div>

                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Razon social</label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"automatico"}
                        value={companyName}
                        setValue={setCompanyName}
                        required
                        disabled
                        iconEnd={<PermIdentityRoundedIcon/>}
                      />
                    </article>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Direccion</label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"automatico"}
                        value={address}
                        setValue={setAddress}
                        required
                        disabled
                        iconEnd={<LocationOnRoundedIcon/>}
                      />
                    </article>
                  </div>

                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Telefono</label>
                      <TextFieldOutlined
                          type={"text"}
                          label={"automatico"}
                          value={telephone}
                          setValue={setTelephone}
                          required
                          disabled
                        iconEnd={<PhoneAndroidRoundedIcon/>}
                        />
                    </article>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Correo</label>
                      <TextFieldOutlined
                      type={"text"}
                      label={"automatico"}
                      value={email}
                      setValue={setEmail}
                      required
                      disabled
                      iconEnd={<AttachEmailRoundedIcon/>}
                      />
                    </article>
                  </div>

                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Fecha Documento</label>
                      <TextFieldOutlined
                        type={"date"}
                        value={documentDate}
                        setValue={setDocumentDate}
                        required
                      />
                    </article>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Valor</label>
                      <TextFieldOutlined
                        type={"number"}
                        label={"valor"}
                        value={price}
                        setValue={setPrice}
                        required
                        iconEnd={<AttachMoneyRoundedIcon/>}
                      />
                    </article>
                  </div>

                  <label
                    className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white" >
                    Numero identificador Documento
                  </label>

                  <Upload/>

                  <div className='w-full'>
                    <InputSelect
                      index='1'
                      title='Seleccionar Area'
                      placeholder="Requerimiento"
                      value={invoiceType}
                      onChange={handleInvoiceType}
                      itemDefault="selecciona una opcion"
                      items={optionsInvoiceType}/>
                  </div>
                  {invoiceType == 'administrativo' &&
                    <div>
                      <InputSelect
                        index="3"
                        title='A quien va Dirigido'
                        placeholder="Dirigido a"
                        value={redirectTo}
                        onChange={handleRedirectTo}
                        itemDefault="selecciona el auditor"
                        items={optionsRedirectTo}/>
                    </div>
                  }
                  {invoiceType == 'operativo' &&
                    <TextFieldOutlined
                      type={"text"}
                      label={"Dirigido a"}
                      value={redirectTo}
                      setValue={setRedirectTo}
                      required
                      disabled
                      iconEnd={<VerifiedUserRoundedIcon/>}
                    />
                  }
                  {redirectTo && <button className='button button--flex'>Crear requerimientos</button>}
                </form>
              </article>
              }
          </div>
        </section>

        <section className='layout-section'>
          <div className='layout-left'>
            <h3 className='container__createFiling createFiling'>Tablas radicados</h3>
            <div className='filing'>
              <section className='viewTableEdit'>
                <DataTableEditable/>
              </section>

            </div>
          </div>
        </section>

      </div>
      }



      {role == "radicacion" &&
        <section className='layout-section'>
          <div className='layout-left'>
            <h3 className='container__createFiling createFiling'>Tablas radicados</h3>
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
      }
    </div>
  )
}

export default index
