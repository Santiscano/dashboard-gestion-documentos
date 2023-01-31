import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

// icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function index() {

    // method file value
    const [file, setFile]= useState('');
    const handleChangeFile = (event: SelectChangeEvent) => {
      setFile(event.target.value);
      console.log('file: ', file);
    }
  
  return (
    <div>
      <label className="block mb-2 text-base font-semibold dark:text-white" >Cargar Archivo</label>
      {/* input */}
      <div className='flex items-center justify-start w-1/2 cursor-pointer'>
        <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center cursor-pointer'>
          { file == '' ?
          <div className='flex flex-col items-center justify-center pt-5 pb-6 '>
            <CloudUploadIcon/>
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Click aqui</span> para subir archivo</p>
          </div>
          : 
          <div className='flex flex-col items-center justify-center pt-5 pb-6 '>
            {file}
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Archivo cargado</span></p>
          </div>
          }
          <input id="dropzone-file" 
            type="file" 
            className='hidden' 
            value={file}
            onChange={handleChangeFile} 
          />
        </label>
      </div>
    </div>
  )
}

export default index
