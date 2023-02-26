import { FC, ReactNode, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'animate.css';
import TextFieldOutlined from '../TextFieldOutline';
// mui
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import { optionAccountType, optionDocumentType, optionsCities } from '../../tools/OptionsValuesSelects';
import InputSelect from '../InputSelect';
import { SelectChangeEvent } from '@mui/material';

import { formattedAmount, capitalizeFirstLatterUppercase } from '../../../Utilities/formatted.utility';
import { addFile } from '../../../services/Files.routes';
import ModalSuccess from '../ModalSuccess';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90vw",
  height: "85vh",
  overflow: 'scroll',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  close: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
  companyName:string;
  lastname: string;
  docIdentity: string;
  price: string;
  accountType: string;
  invoiceType: string;
  redirectTo: number | undefined;
  optionsRedirectTo: any;
  cedi: string;
  settledNumber: string;
  email: string;
  children: ReactNode;
}

const  UploadFileModal: FC<Props> = ({
  open,
  close,
  companyName,
  lastname,
  docIdentity,
  price,
  accountType,
  invoiceType,
  redirectTo,
  optionsRedirectTo,
  cedi,
  settledNumber,
  email,
  children,
}) => {
  const [nameAuditorSelected, setNameAuditorSelected] = useState('');
  const [openSuccess, setOpenSuccess] =  useState(false);

  const filterAuditorSelected = () => {
    const allAuditors = optionsRedirectTo;
    const auditorSelected = allAuditors.filter((
      user:{idusers:number}) => user.idusers === redirectTo
    )
    console.log('auditorSelected', auditorSelected)
    const nameSelected = `${auditorSelected[0].users_name} ${auditorSelected[0].users_lastname}`;
    setNameAuditorSelected(nameSelected)
  }

  useEffect(() => {
    if(open){
      filterAuditorSelected();
    }
  },[open])

  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='animate__animated animate__fadeIn'
      >
        <Box sx={style} >
          <h1 className='border-neutral-300 border-2 rounded p-2.5 text-3xl font-bold mb-3 '>
            Informacion Cliente
          </h1>
          <div className='border-neutral-300 border-2 rounded p-2.5 '>
            <section>

              <div className='flex justify-between flex-wrap'>
                <div className='text-2xl font-bold mr-8' >
                  {capitalizeFirstLatterUppercase(companyName)} {capitalizeFirstLatterUppercase(lastname)}
                </div>
                <span className='text-blue-700 text-lg'>(ID: {docIdentity})</span>
                <p className='mr-8 font-bold text-lg'>{formattedAmount(price)}</p>
              </div>

              <div className='flex mt-4'>
                <p className='font-bold inline-block mr-4 w-1/2'>
                  Tipo De Cuenta:
                  <span className='text-slate-600 font-normal'>
                    {` ${capitalizeFirstLatterUppercase(accountType)}`}
                  </span>
                </p>
                <p className='font-bold inline-block mr-4'>
                  Area:
                  <span className='text-slate-600 font-normal'>
                    {` ${capitalizeFirstLatterUppercase(invoiceType)}`}
                  </span>
                </p>
              </div>

              <div className='flex'>
                <p className='font-bold inline-block mr-4 w-1/2'>
                  Para:
                  <span className='text-slate-600 font-normal'>
                    {` ${capitalizeFirstLatterUppercase(nameAuditorSelected)}`}
                  </span>
                </p>
                <p className='font-bold inline-block'>
                  Cedi:
                  <span className='text-slate-600 font-normal'>
                    {` ${capitalizeFirstLatterUppercase(cedi)}`}
                  </span>
                </p>
              </div>

              <div className='flex'>
                <p className='font-bold inline-block mr-4 w-1/2'>
                  Radicado:
                  <span className='text-slate-600 font-normal'>
                    {` ${settledNumber}`}
                  </span>
                  </p>
                <p className='font-bold inline-block mr-4'>
                  correo:
                  <span className='text-slate-600 font-normal'>
                    {` ${email.toLowerCase()}`}
                  </span>
                </p>
              </div>

            </section>
          </div>
          {children}

        </Box>
      </Modal>
    </>
  )
}

export default UploadFileModal;
