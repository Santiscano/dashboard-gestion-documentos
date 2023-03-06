import { useContext, useEffect, useState } from 'react'
import './provider.css';
import { SelectChangeEvent } from '@mui/material/Select';
import InputSelect from '../../components/common/InputSelect';
import Upload from '../../components/common/Upload';
import { DataTableHalfScreen } from '../../components/common/DataTableHalfScreen'
import Preview from '../../components/common/Preview';
import Button from '../../components/common/Button';
import TextFieldOutlined from '../../components/common/TextFieldOutline';
import {
  optionsInvoiceType,
  // optionsRedirectTo,
  optionAccountType,
  optionDocumentType,
  optionsRedirectToOperativo,
  optionCediType,
  } from '../../components/tools/OptionsValuesSelects';
import DataTableEditable from '../../components/common/DataTableEditable';
import InputSelectRedirectTo from '../../components/common/InputSelectRedirectTo';
import AutoCompleteRedirectTo from '../../components/common/AutoCompleteRedirectTo';
import ButtonOpenUploadFile from '../../components/common/ButtonOpenUploadFile';
import UploadFileModal from '../../components/common/ModalUploadFile';

import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Autocomplete, Box, TextField } from '@mui/material';

import 'animate.css';
import { getCedis } from '../../services/Cedis.routes';
import { getUsers } from '../../services/Users.routes';
import { getSettled } from '../../services/generateSettled.service';
import { uploadfile } from '../../services/Pdf.routes';
import { getFiles, addFile } from '../../services/Files.routes';
import { AllUsers, setProviders } from '../../interfaces/User';

import { formattedAmount } from '../../Utilities/formatted.utility';
import { createFilePath } from '../../services/FilesPath.routes';
import ModalSuccess from '../../components/common/ModalSuccess';
import { AllCedis, CedisId, CedisIdName } from '../../interfaces/Cedis';
import InputSelectCedi from '../../components/common/InputSelectCedi';
import { GeneralValuesContext } from '../../Context/GeneralValuesContext';

function index() {
  // temporal para revisar respuesta
  const [result, setResult]                     = useState(['']);         // respuesta envio formulario datos
  const [statusFileResponse, setStatusFileResponse]= useState(false);
  // valores actualizables con DB
  const [allUsers, setAllUsers]                 = useState([''])          // recibi todos los usuarios de DB
  const [optionsCedisIdName, setOptionsCedisIdName ] = useState<CedisIdName[]>([]); // recibe nombre y id de todas las cedis
  // const [optionsCedisId, setOptionsCedisId]     = useState<number[]>([])   //solo id de sede seleccionada
  // const [optionsCedisName, setOptionsCedisName] = useState<string[]>([]);

  const [optionsProviders, setOptionsProviders] = useState(['','']);    // filtro de  allUsers los proveedores
  const [optionsRedirectTo, setOptionsRedirectTo]= useState([''])         // filtro allUsers con opciones redirectTo
  const [ allFiles, setAllFiles ]               = useState([''])          //

  // validar condicionales para renderizar
  const [documentType, setDocumentType ]        = useState('');         // tipos documentos lo recibe de un type creado
  const [isSettled, setIsSettled]               = useState(false);       // es true cuando el numero de radicado llega de la DB
  const [invoiceType, setInvoiceType]           = useState('');         // define las opciondes de a quien va dirigido
  const [accountType, setAccountType ]          = useState('');         // con esto se hace un filtro para los tipos de usuario
  const [statusResponse, setStatusResponse]     = useState(false);      // status 200 para mostrar modal
  const [modalSuccess, setModalSuccess]           = useState(false);      // status 200 filePath para mostrar hijo modal

  // valores formulario 1 Get radicado
  const [cedi, setCedi]                         = useState('');         // con cedi se anexa al numero de radicado
  const [cediType, setCediType]                 = useState('')          //define si son cedis propias o nacionales

  // valores que envio al formulario 2
  const [ idUser, setIdUser ]                   = useState('')          //id extraido del objeto objectUser usuario tipo proveedor
  const [settledNumber, setSettledNumber]       = useState('');         // numero de radicado generado por DB
  const [price, setPrice]                       = useState('');         // numero escrito en el input
  const [redirectTo, setRedirectTo]             = useState<number>();   // selecionado de usuarios rol !== provider && radication
  const [accountNumber, setAccountNumber]       = useState('');   // numero de cuenta relacionado a tipo de cuenta;

  // valores formulario file
  const [file, setFile]                         = useState('');
  // relacionamiento radicado y archivo
  const [comments, setComments]                 = useState('')

  // captura de valores de formulario que no son necesariamente para el form
  const [objectUser, setObjectUser ]            = useState();           // contiene un objeto con toda la info del usuario "proveedor"
  const [docIdentity, setDocIdentity]           = useState('');         //
  const [address, setAddress]                   = useState('');         // su valor es extraido del objectUser
  const [email, setEmail]                       = useState('');         // su valor es extraido del objectUser
  const [companyName, setCompanyName]           = useState('');         // su valor es extraido del objectUser
  const [lastname, setLastname]                 = useState('');         // su valor es extraido del objectUser
  const [telephone, setTelephone]               = useState('');         // su valor es extraido del objectUser

  // sin identificar uso
  const [documentNumber,setDocumentNumber]= useState('');
  const [documentDate, setDocumentDate]   = useState('');
  const [fileName, setFileName]           = useState('');
  const [role, setRole ]                  = useState('radicacion');

  const { preLoad, setPreLoad } = useContext(GeneralValuesContext);
  // METHODS

  /**
   * Funcion que se ejecuta al renderizar el componente, trae las cedis - users -
   * convierte el valor a ciudades y actualiza el estado
   * filtro de usuarios que solo tengan rol de proveedores y actualiza el estado
   * envio cedi para generar radicado
   */
  const handleGetUsersCedis = async () => {
    const allCedis: AllCedis[] = await getCedis();
    const cedisIdName: CedisIdName[] = allCedis?.map( item => {
      return {
        idsedes: item.idsedes,
        sedes_city: item.sedes_city
      }
    });
    setOptionsCedisIdName(cedisIdName);

    // const citysId = allCedis.map((item: { idsedes: number }) => item.idsedes );
    // setOptionsCedisId(citysId);
    // console.log('cedisId: ', citysId);

    // const citysName = allCedis.map((item: {sedes_city: string}) => item.sedes_city);
    // setOptionsCedisName(citysName);
    // console.log('citysName: ', citysName);



    const getAllUsers = await getUsers();
    setAllUsers(getAllUsers);

    const getAllFiles = await getFiles();
    setAllFiles(getAllFiles?.data);
    // console.log('getAllFiles: ', getAllFiles?.data);
  };

  /**
   * segun el tipo de documento muestra los usuarios de tipo providers
   * @param e
   */
  const handleDocumentType = async (e: SelectChangeEvent) => {
    const SelectDocumentType = e.target.value;
    setDocumentType(SelectDocumentType);

    const allUsersToFilter = allUsers

    // @ts-ignore
    const filterProviderUsers = allUsersToFilter.filter((user: {
      idroles:number
    }) => user.idroles !== 1)

    // @ts-ignore
    const filterDocumentType = filterProviderUsers.filter((user:{
      users_identification_type:string
      //@ts-ignore
    }) => user.users_identification_type && user.users_identification_type.toUpperCase() == SelectDocumentType )
    setOptionsProviders(filterDocumentType);
  };

  /**
   * se ejecutara al cambio de seleccionar area
   * toma el estado con todos los usuarios, filtra por roles
   * y entrega al estado de optionsRedirectTo
   * @param e
   */
  const handleInvoiceType = (e: SelectChangeEvent) => {
    const optionInvoiceType = e.target.value;
    setInvoiceType(optionInvoiceType);

    const allUsersToFilter = allUsers;
    console.log('allUsersToFilter: ', allUsersToFilter);

    // @ts-ignore
    const filterAuditors = allUsersToFilter.filter((user: {
      idroles:number
    }) => user.idroles !== 1 && user.idroles !== 2 && user.idroles !== 7)
    console.log('filterAuditors: ', filterAuditors);

    // @ts-ignore
    // contabilidad
    const filterAccounting = allUsersToFilter.filter((user: {
      idroles:number
    }) => user.idroles === 5)

    if(optionInvoiceType === 'Administrativo'){
      setOptionsRedirectTo(filterAuditors)
    };
    if(optionInvoiceType === 'Operativo'){
      setOptionsRedirectTo(filterAccounting)
    }

    //

  };  //tipo de factura "seleccionar area"


  /**
   * ?FORMULARIO
   * toma la ciudad que se tenga en estado y hace get para generar radicado
   * @setSettledNumber : actualiza el estado de numero de radicado con la respuesta de la api
   * @param e evento
   */
  const handleSettledSubmit = async (e:any) => {
    try{
      setPreLoad(true);
      console.log(preLoad);
      e.preventDefault();
      // @ts-ignore
      const newSettled = await getSettled(cedi.sedes_city);
      console.log('newSettled: ', newSettled);

      setSettledNumber(newSettled);
      newSettled ? setIsSettled(true) : setIsSettled(false);
    } catch(error) {
      console.log('error: ', error);
    } finally {
      setPreLoad(false);
    }
  };

  /**
   * parametros que recibe el autocomplete para renderizar las opciones
   * @option : selecciona el array de opciones a usar
   * @getOptionLabel : mostrara el valor seleccionado
   * @renderOption : cambia el renderizado del objeto option a como lo seleccione personalizado
   */
  const handleOptionsProviders = {
    options: optionsProviders.length > 0 ? optionsProviders : [''],
    // @ts-ignore
    getOptionLabel: (options: {users_identification: string}) => `${options.users_identification}`,
    // @ts-ignore
    renderOption: (props, option, index) => {
      return (
        <Box component="li" {...props} key={option.idusers} >
          {option.users_name} - {option.users_identification} - {option.users_identification_digital_check}
        </Box>
      )
    },
    renderInput: (params: any) => (
      <TextField
        {...params}
        // label={}
      >
      </TextField>
    )
  }

  /**
   * por ahora cambie esta opcion por un SELECT
   */
  const handleOptionsAuditors = {
    options: optionsRedirectTo.length > 0 ? optionsRedirectTo : [],
    // @ts-ignore
    getOptionLabel: (options: {idusers:number}) => options.idusers,
    // @ts-ignore
    renderOption: (props, option, index) => {
      return (
        <Box component="li" {...props} key={option.idusers}>
          {option.users_name} {option.users_lastname} -
          {option.idroles === 3 ? " Auditor" :
          option.idroles === 4  ? " Gerente" :
          option.idroles === 5  ? " Contabilidad" : " Tesoreria" }
        </Box>
      )
    },
    renderInput: (params:any) => (
      <TextField
        {...params}
      ></TextField>
    )
  }

  /**
   * se ejecuta cuando el auto complete se actualiza
   * @param props
   */
  const handleValuesUser = (props:any) => {
    setObjectUser(props);
    console.log('handleValueUser: ', props);
    setDocIdentity(props.users_identification);
    setIdUser(props.idusers)
    setAddress(props.users_address);
    setEmail(props.users_email);
    setCompanyName(props.users_name);
    setLastname(props.users_lastname);
    setTelephone(props.users_phone);
  }

  /**
   * actualiza el estado en estos tipos de select cedi - accountType - documentType - seleccionar area - redirigido a
   * @param e
   */
  const handleCedi        = (e: SelectChangeEvent) => {setCedi(e.target.value), console.log("cedi: ", cedi)};
  const handleAccountType = (e: SelectChangeEvent) => {setAccountType(e.target.value)};
  // @ts-ignore
  const handleRedirectTo  = (e: SelectChangeEvent) => {setRedirectTo(e.target.value)};
  const handleCloseModal  = () => setStatusResponse(false);
  const handleCloseModalChild = () => setModalSuccess(false);
  const handleComments    = (e: SelectChangeEvent) => {setComments(e.target.value)};
  const handleCediType    = (e: SelectChangeEvent) => {setCediType(e.target.value)};
  // const handleAccountNumber=(e: any) => {setAccountNumber(e.target.value)};

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
  const  handleReset = () => {
    setIsSettled(false)
    setIdUser('');
    setSettledNumber('');
    setDocumentType('');
    setCedi('');
    setAccountType('');
    setCompanyName('');
    setAddress('');
    setTelephone('');
    setEmail('');
    setPrice('');
    setInvoiceType('');
    setRedirectTo(undefined);
  }

  /**
   * ?Formulario parte 2
   * formulario data set DB
   * se hacen 3 envios de formularios
   * 1- archivo
   * 2- datos usuario"proveedor"
   * 3- metodo relacion de archivo y datos
   * 4-
   * @param e
   */
  const handleFormSubmit = async (e:any) => {
    e.preventDefault();
    // @ts-ignore
    const addFileResponse = await addFile(idUser, settledNumber, price, redirectTo, cedi.idsedes );

    //abro modal
    const status = addFileResponse?.status;

    status === 200 && setStatusFileResponse(true)

    // guardo respuesta completa en variable result
    // @ts-ignore
    setResult(addFileResponse);
  }

  /**
   * envia el archivo adjunto
   * @param e detiene el reset del la pantalla
   */
  const handleFileSubmit = async (e:any) => {
    e.preventDefault();

    const pdfFile = new FormData();
    pdfFile.append('pdf_file', file);
    const responseUploadFile = await uploadfile(pdfFile);
    const pathFileUpload = await responseUploadFile?.data.path;

    // @ts-ignore
    const idFiles = result?.data.file[0].idfiles;

    const responseConcatFilePath = await createFilePath(idFiles, pathFileUpload, comments );
    // @ts-ignore
    const status = responseConcatFilePath?.status
    status === 200 && setModalSuccess(true);
  }

  /**
   * genero el nuevo numero de radicado
   * seteo los valores para esconder modales y limpiar las partes del formulario que son necesarias volver a llenar.
   */
  const newSettledSameUser = async () => {
    const newSettled = await getSettled(cedi);
    setSettledNumber(newSettled);
    // setAccountType('');
    setPrice('');
    setStatusFileResponse(false);
    setFile('');
    setComments('');
    setModalSuccess(false);
    setStatusResponse(false);
  }

  const resetFullForm = () => {
    handleReset();

    setObjectUser(undefined);
    setStatusFileResponse(false);
    setFile('');
    setComments('');
    setModalSuccess(false);
    setStatusResponse(false);
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
              {isSettled && <button
                className='button button--flex mt-6 buttonHover'
                onClick={handleReset}
              ><ArrowBackRoundedIcon className='arrow'/> Reiniciar </button>}
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
                        required
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
                        disabled={!documentType}
                        id='filter-providers'
                        {...handleOptionsProviders}
                        autoComplete
                        includeInputInList
                        value={objectUser}
                        onChange={(event, newValue) => {
                          // @ts-ignore
                          handleValuesUser(newValue)
                        }}
                        onInputChange={(event, newValue) => {
                          // @ts-ignore
                          setObjectUser(newValue);
                        }}
                      />
                    </article>
                  </div>
                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <InputSelect
                          type={"text"}
                          name="cediType"
                          title='Tipo de Cedi'
                          placeholder="Tipo de Cedi"
                          required
                          value={cediType}
                          onChange={handleCediType}
                          itemDefault="selecciona el tipo de documento"
                          items={optionCediType}
                        />
                    </article>
                    <article className='md:w-1/2'>
                      <InputSelectCedi
                        type={"text"}
                        title='Ciudad a Radicar'
                        placeholder="Ciudad a radicar"
                        name="cedi"
                        required
                        value={cedi}
                        onChange={handleCedi}
                        itemDefault="selecciona una opcion"
                        isSettled={isSettled}
                        // @ts-ignore
                        // items={optionsCedisName}
                        items={optionsCedisIdName}
                      />
                    </article>
                  </div>
                  <Button name="Generar numero Radicado" ></Button>
                </form>
              </article>
              :
              <article className='filing'>
                <section>
                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <InputSelect
                        type={"text"}
                        title='Tipo Documento'
                        placeholder="Tipo Documento*"
                        required
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
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                        >Razon social</label>
                      <TextFieldOutlined
                        type={"text"}
                        label={"Razon Social"}
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
                        label={"Direccion"}
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
                          label={"Telefono"}
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
                      label={"Email"}
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

                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2' >
                      <InputSelect
                        type={"text"}
                        title='Tipo de cuenta'
                        placeholder="cuenta de"
                        required
                        value={accountType}
                        onChange={handleAccountType}
                        itemDefault="selecciona el tipo de cuenta"
                        items={optionAccountType}
                      />
                    </article>
                    <article className='md:w-1/2' >
                      <label className="block my-2 mx-2 mt-4 text-base font-semibold dark:text-white"
                          >numero de cuenta</label>
                        <TextFieldOutlined
                            type={"text"}
                            label={"numero"}
                            value={accountNumber}
                            setValue={setAccountNumber}
                            required
                            iconEnd={<PostAddIcon/>}
                          />

                    </article>

                  </div>

                  <div className='md:flex md:flex-wrap'>
                    <article className='md:w-1/2'>
                      <InputSelect
                        index='1'
                        title='Seleccionar Area'
                        placeholder="Requerimiento"
                        required
                        value={invoiceType}
                        onChange={handleInvoiceType}
                        itemDefault="selecciona una opcion"
                        items={optionsInvoiceType}/>
                    </article>
                    {invoiceType &&
                    <article className='md:w-1/2' >
                      <InputSelectRedirectTo
                        type={"text"}
                        title='Dirigido '
                        placeholder="Para"
                        required
                        value={redirectTo}
                        onChange={handleRedirectTo}
                        itemDefault="selecciona el Auditor"
                        items={optionsRedirectTo}
                      />
                    </article>
                    }
                  </div>
                  {/* {(objectUser && cedi && settledNumber && price && redirectTo  && idUser) && */}
                  <button
                    className='button button--flex mt-6'
                    onClick={() => setStatusResponse(true)}
                    >Validar Informacion</button>
                  {/* } */}
                </section>

                <UploadFileModal
                  open={statusResponse}
                  close={handleCloseModal}
                  companyName={companyName}
                  lastname={lastname}
                  docIdentity={docIdentity}
                  price={price}
                  accountType={accountType}
                  invoiceType={invoiceType}
                  redirectTo={redirectTo}
                  optionsRedirectTo={optionsRedirectTo}
                  // @ts-ignore
                  cedi={cedi.sedes_city}
                  settledNumber={settledNumber}
                  email={email}
                >
                  <form onSubmit={handleFormSubmit}>
                    <Button name="Crear requerimientos"></Button>
                  </form>

                  { statusFileResponse &&
                    <div className='flex rounded justify-between'>
                      <form onSubmit={handleFileSubmit} className="border-neutral-300 border-2 division--containers" >
                          <Upload
                            file={file}
                            fileName={fileName}
                            handleChangeFile={handleChangeFile}
                          />
                        <button className="button button--flex mt-4 relative top-4" >Adjuntar Archivos</button>
                      </form>
                      <textarea
                        name="Comentario" id="comentary"
                        placeholder='si necesita comentarios ingreselos aquí'
                        className='border-neutral-300 border-2 division--containers'
                        value={comments}
                        // @ts-ignore
                        onChange={handleComments}
                      ></textarea>
                    </div>
                  }
                  <ModalSuccess
                    open={modalSuccess}
                    close={handleCloseModalChild}
                    setModalSuccess={setModalSuccess}
                    settledNumber={settledNumber}
                    newSettledSameUser={newSettledSameUser}
                    resetFullForm={resetFullForm}
                  />
                </UploadFileModal>

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
              <DataTableHalfScreen/>
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
