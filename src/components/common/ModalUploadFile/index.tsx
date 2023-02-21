import { FC } from 'react'
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
}

const  UploadFileModal: FC<Props>= ({
  open,
  close,
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
          <h3>hola estoy funcionando</h3>
          <h5>y asi seguire</h5>
        </Box>
      </Modal>
    </>
  )
}

export default UploadFileModal;
