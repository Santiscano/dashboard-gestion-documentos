import { FC, ReactNode } from 'react'
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

import { formattedAmount } from '../../../Utilities/formatted.utility';

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

interface Props {
  open: boolean;
  close: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
  companyName:string;
  lastname: string;
  docIdentity: string;
  price: string;
  invoiceType: string;
  redirectTo: any;
  cedi: string;
  settledNumber: string;
  email: string;
  children: ReactNode;
}

const  UploadFileModal: FC<Props>= ({
  open,
  close,
  companyName,
  lastname,
  docIdentity,
  price,
  invoiceType,
  redirectTo,
  cedi,
  settledNumber,
  email,
  children,
}) => {

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
          <div className='border-neutral-300 border-2 rounded p-2.5'>
            <section>
              <div className='flex justify-between'>
                <div className='' >
                  <span className='text-2xl font-bold mr-8'>{companyName} {lastname}</span>
                  <span className='text-blue-700 text-lg'>(ID: {docIdentity})</span>
                </div>
                <p className='mr-8 font-bold text-lg'>{formattedAmount(price)}</p>
              </div>
              <div className='mt-4'>
                <p className='font-bold inline-block mr-4'>
                  Area:
                  <span className='text-slate-600 font-normal'>
                    {` ${invoiceType}`}
                  </span>
                </p>
                <p className='font-bold inline-block mr-4'>
                  Para:
                  <span className='text-slate-600 font-normal'>
                    {redirectTo}
                  </span>
                </p>
                <p className='font-bold inline-block'>
                  Cedi:
                  <span className='text-slate-600 font-normal'>
                    {` ${cedi}`}
                  </span>
                </p>
              </div>
              <div>
                <p className='font-bold inline-block mr-4'>
                  Radicado:
                  <span className='text-slate-600 font-normal'>
                    {settledNumber}
                  </span>
                  </p>
                <p className='text-slate-600 inline-block '>
                  correo:
                  <span className='text-slate-600'>
                    {email}
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
