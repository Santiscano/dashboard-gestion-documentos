import { useEffect, useState } from 'react'
import './provider.css';
import { SelectChangeEvent } from '@mui/material/Select';
import InputSelect from '../../components/common/InputSelect';
import Upload from '../../components/common/Upload';
import DataTable from '../../components/common/DataTable'
import Preview from '../../components/common/Preview';
import Button from '../../components/common/Button';
import TextFieldOutlined from '../../components/common/TextFieldOutline';
import {
  optionsInvoiceType,
  optionsRedirectTo,
  optionAccountType,
  optionDocumentType,
  optionsRedirectToOperativo,
  } from '../../components/Objects/Provider';
import DataTableEditable from '../../components/common/DataTableEditable';

import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Autocomplete, Box, TextField } from '@mui/material';

import 'animate.css';
import { getCedis } from '../../services/Cedis.routes';
import { getUsers } from '../../services/Users.routes';
import { getSettled } from '../../services/generateSettled.service';
import { uploadfile } from '../../services/Pdf.routes';
import { AllUsers } from '../../interfaces/User';


function index() {
  // valores actualizables con DB
  const [optionsProviders, setOptionsProviders] = useState(['','']);    // recibe la lista de opciones de proveedores
  const [optionsCedis, setOptionsCedis ]        = useState(['','']);    // recibe la lista de cedis
  const [settledNumber, setSettledNumber]       = useState('');         // numero de radicado generado por DB

  // validar para renderizar
  const [documentType, setDocumentType ]        = useState('');         // tipos documentos lo recibe de un type creado
  const [isSettled, setIsSettled]               = useState(true);       // es true cuando el numero de radicado llega de la DB
  const [invoiceType, setInvoiceType]           = useState('');         // define las opciondes de a quien va dirigido
  const [accountType, setAccountType ]          = useState('');         // con esto se hace un filtro para los tipos de usuario

  // valores formulario 1 Get radicado
  const [cedi, setCedi]                         = useState('');         // con cedi se anexa al numero de radicado

  // valores que envio al formulario
  const [ idUser, setIdUser ]                   = useState('')          //id extraido del objeto objectUser para formulario

  // captura de valores de formulario que no son necesariamente para el form
  const [objectUser, setObjectUser ]            = useState();           // contiene un objeto con toda la info del usuario "proveedor"
  const [address, setAddress]                   = useState('');         // su valor es extraido del objectUser
  const [email, setEmail]                       = useState('');         // su valor es extraido del objectUser
  const [companyName, setCompanyName]           = useState('');         // su valor es extraido del objectUser
  const [telephone, setTelephone]               = useState('');         // su valor es extraido del objectUser

  // sin identificar uso
  const [documentNumber,setDocumentNumber]= useState('');
  const [documentDate, setDocumentDate]   = useState('');
  const [price, setPrice]                 = useState('');
  const [file, setFile]                   = useState('');
  const [fileName, setFileName]           = useState('');
  const [redirectTo, setRedirectTo]       = useState('');
  const [role, setRole ]                  = useState('radicacion');

  // METHODS

  /**
   * Funcion que se ejecuta al renderizar el componente, trae las cedis - users -
   * convierte el valor a ciudades y actualiza el estado
   * filtro de usuarios que solo tengan rol de proveedores y actualiza el estado
   * envio cedi para generar radicado
   */
  const handleGetUsersCedis = async () => {
    const allCedis = await getCedis();
    const citys = allCedis.map((item: {sedes_city: string}) => item.sedes_city);
    setOptionsCedis(citys);

    // const allUsers = await getUsers();
    // const filterProviderUsers = allUsers.filter((user: {idroles:number}) => user.idroles !== 1 )
    // setOptionsProviders(filterProviderUsers);
  };

  const handleDocumentType = async (e: SelectChangeEvent) => {
    const SelectDocumentType = e.target.value;
    setDocumentType(SelectDocumentType);

    const allUsers = await getUsers();

    const filterProviderUsers = allUsers.filter((user: {
      idroles:number
    }) => user.idroles !== 1)

    const filterDocumentType = filterProviderUsers.filter((user:{
      users_identification_type:string
      //@ts-ignore
    }) => user.users_identification_type && user.users_identification_type.toUpperCase() == SelectDocumentType )
    setOptionsProviders(filterDocumentType);
  };


  /**
   * ?FORMULARIO
   * toma la ciudad que se tenga en estado y hace get para generar radicado
   * @setSettledNumber : actualiza el estado de numero de radicado con la respuesta de la api
   * @param e evento
   */
  const handleSettledSubmit = async (e:any) => {
    e.preventDefault();
    const newSettled = await getSettled(cedi);
    console.log('newSettled: ', newSettled);
    setSettledNumber(newSettled);
    newSettled ? setIsSettled(true) : setIsSettled(false);
  };

  /**
   * parametros que recibe el autocomplete para renderizar las opciones
   * @option : selecciona el array de opciones a usar
   * @getOptionLabel : mostrara el valor seleccionado
   * @renderOption : cambia el renderizado del objeto option a como lo seleccione personalizado
   */
  const handleOptionsProviders = {
    options: optionsProviders.length > 0 ? optionsProviders : [],
    // @ts-ignore
    getOptionLabel: (options: {users_identification:string }) => options.users_identification,
    // @ts-ignore
    renderOption: (props, option, index) => {
      return (
        <Box component="li" {...props} key={option.idusers} >
          {option.users_name} - {option.users_identification}
        </Box>
      )
    },
    renderInput: (params:any) => (
      <TextField
        {...params}
        // label={}
      >
      </TextField>
    )
  }

  /**
   * se ejecuta cuando el auto complete se actualiza
   * @param props
   */
  const handleValuesUser = (props:any) => {
    setObjectUser(props);
    console.log('handleValueUser: ', props);
    setIdUser(props.idusers)
    setAddress(props.users_address);
    setEmail(props.users_email);
    setCompanyName(props.users_name);
    setTelephone(props.users_password);
  }

  /**
   * actualiza el estado en estos tipos de select cedi - accountType - documentType - seleccionar area - redirigido a
   * @param e
   */
  const handleCedi = (e: SelectChangeEvent) => {setCedi(e.target.value)};
  const handleAccountType = (e: SelectChangeEvent) => {setAccountType(e.target.value)};
  const handleInvoiceType = (e: SelectChangeEvent) => { setInvoiceType(e.target.value); };  //tipo de factura "seleccionar area"
  const handleRedirectTo = (e: SelectChangeEvent) => {setRedirectTo(e.target.value)};

  /**
   * metodo para formatear los numeros a dinero
   * @param amount
   * @returns
   */
  const formattedAmount = (amount:any) => {
    const numericAmount = parseFloat(amount);
    const formatted = numericAmount.toLocaleString('es-CO',{
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    });
    return formatted;
  }

  /**
   * metodo para mostrar a la vista el nombre del archivo seleccionado
   * @param e
   */
  const handleChangeFile = (e: SelectChangeEvent) => {
    // @ts-ignore
    console.log(e.target.files[0])
    // @ts-ignore
    setFile(e.target.files[0]);
    const fileNameEvent = e.target.value.replace(/^.*\\/, ''); // renombrar archivo
    setFileName(fileNameEvent);
  }

  /**
   * reinicia todos los valores a '';
   */
  const handleReset = () => {
    setIsSettled(false)
    setIdUser('');
    setAddress('');
    setEmail('');
    setCompanyName('');
    setTelephone('');
    setDocumentType('');
    setInvoiceType('');
    setAccountType('');
    setCedi('');
    setPrice('');
    setFile('');
    setFileName('');
    setRedirectTo('');
  }



  /**
   * ?Formulario
   * formulario data set DB
   * se hacen 3 envios de formularios
   * 1- archivo
   * 2- datos usuario"proveedor"
   * 3- metodo relacion de archivo y datos
   * 4-
   * @param e
   */
  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    // clearInputs()

    // envio archivo
    const pdfFile = new FormData();
    pdfFile.append('pdf_file', file);
    uploadfile(pdfFile);

    // envio datos proveedor
    const form = new FormData();
    // form.append('idproviders',)
    form.append('idusers', idUser)
    form.append('files_registered', settledNumber)
    // form.append('files_price',)

    // envio relacion archivo - datos
  }





  useEffect(() => {
    handleGetUsersCedis();
  },[])

  return (
    <div className='layout'>
      {role == "radicacion" &&
      <div>
        <section className='layout-section'>
          <div className='layout-left'>
            <div className='container__createFiling'>
              <h3 className='createFiling'>Crear Nuevo radicado</h3>
              <button
                className='button button--flex mt-6 buttonHover'
                onClick={handleReset}
              ><ArrowBackRoundedIcon className='arrow'/> Reiniciar </button> {/** se debe organizar para limpiar y reiniciar formulario */}
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
                    { documentType &&
                    <article className='md:w-1/2'>
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Numero Documento</label>
                      {/* @ts-ignore */}
                      <Autocomplete
                        sx={{marginLeft:1, my:2}}
                        id='filter-providers'
                        {...handleOptionsProviders}
                        autoComplete
                        includeInputInList
                        value={objectUser}
                        onChange={(event, newValue) => {
                          // @ts-ignore
                          handleValuesUser(newValue)
                        }}
                      />
                    </article>
                    }
                  </div>
                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <InputSelect
                        type={"text"}
                        title='Ciudad a Radicar'
                        placeholder="Ciudad a radicar"
                        name="cedi"
                        value={cedi}
                        onChange={handleCedi}
                        itemDefault="selecciona una opcion"
                        items={optionsCedis}
                      />
                    </article>
                  </div>
                  <Button name="Generar numero Radicado" ></Button>
                </form>
              </article>
              :
              <article className='filing'>
                <form onSubmit={handleFormSubmit}>

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
                      {/* @ts-ignore */}
                      <Autocomplete
                        sx={{marginLeft:1, my:2}}
                        id='filter-providers'
                        {...handleOptionsProviders}
                        autoComplete
                        includeInputInList
                        value={objectUser}
                        onChange={(event, newValue) => {
                          // @ts-ignore
                          handleValuesUser(newValue)
                        }}
                      />
                    </article>
                  </div>

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
                        placeholder="cuenta de"
                        value={accountType}
                        onChange={handleAccountType}
                        itemDefault="selecciona el tipo de cuenta"
                        items={optionAccountType}
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
                    {/* <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Fecha Documento</label>
                      <TextFieldOutlined
                        type={"date"}
                        value={documentDate}
                        setValue={setDocumentDate}
                        required
                      />
                    </article> */}
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Valor
                        <b className='mx-12'> {price !== '' && formattedAmount(price)} </b>
                      </label>
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

                  <Upload
                    file={file}
                    fileName={fileName}
                    handleChangeFile={handleChangeFile}
                  />

                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <InputSelect
                        index='1'
                        title='Seleccionar Area'
                        placeholder="Requerimiento"
                        value={invoiceType}
                        onChange={handleInvoiceType}
                        itemDefault="selecciona una opcion"
                        items={optionsInvoiceType}/>
                    </article>
                    {invoiceType &&
                    <article className='md:w-1/2'>
                      <InputSelect
                        index="3"
                        title='A quien va Dirigido'
                        placeholder="Dirigido a"
                        value={redirectTo }
                        onChange={handleRedirectTo}
                        itemDefault="selecciona el auditor"
                        items={invoiceType === 'Administrativo' ? optionsRedirectTo : optionsRedirectToOperativo}/>
                    </article>
                    }
                  </div>
                  {redirectTo && <Button name="Crear requerimientos"></Button>}
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
