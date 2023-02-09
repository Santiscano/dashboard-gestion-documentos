import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'animate.css';
import TextFieldOutlined from '../TextFieldOutline';
// mui
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import { optionAccountType, optionDocumentType, optionsCities } from '../../Objects/Provider';
import InputSelect from '../InputSelect';
import { SelectChangeEvent } from '@mui/material';

import BrandingWatermarkRoundedIcon from '@mui/icons-material/BrandingWatermarkRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: "80vh",
  overflow: 'scroll',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: any) {
  const [settledNumber, setSettledNumber] = React.useState(props.id);
  const [cedi, setCedi ]                  = React.useState(props.cedi);
  const [accountType, setAccountType ]    = React.useState(props.account_type);
  const [documentType, setDocumentType ]  = React.useState('');
  const [documentNumber,setDocumentNumber]= React.useState('');
  const [companyName, setCompanyName]     = React.useState('');
  const [address, setAddress]             = React.useState('');
  const [telephone, setTelephone]         = React.useState('');
  const [email, setEmail]                 = React.useState('');
  const [documentDate, setDocumentDate]   = React.useState('');
  const [price, setPrice]                 = React.useState('');
// state document
// open document
  const [invoiceType, setInvoiceType]     = React.useState('');
  const [redirectTo, setRedirectTo]       = React.useState('');

  const handleCedi = (e: SelectChangeEvent) => {setCedi(e.target.value)};
  const handleDocumentType = (e: SelectChangeEvent) => {setDocumentType(e.target.value)};
  const handleAccountType = (e: SelectChangeEvent) => {setAccountType(e.target.value)};

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='animate__animated animate__fadeIn'
      >
        <Box 
          sx={style}
        >
          <h3 className='createFiling'>Actualizar informacion radicado</h3>
          <div className='w-full'>
            <InputSelect
              index='1'
              title='Seleccionar Area'
              placeholder="Requerimiento" 
              value={cedi}
              onChange={handleCedi}
              itemDefault="selecciona una opcion"
              items={optionsCities}/>
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
        </Box>
      </Modal>
    </>
  );
}