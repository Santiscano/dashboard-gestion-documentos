import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

// icons
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'

function index(props:any) {

    // method file value


  return (
    <div>
      <label className="block mb-2 text-base font-semibold dark:text-white" >Cargar Archivo</label>
      {/* input */}
      <div className='flex items-center justify-center w-full cursor-pointer bg-zinc-200 rounded'>
        <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center cursor-pointer'>
          { props.file == '' ?
          <div className='flex flex-col items-center justify-center pt-5 pb-6 '>
            <CloudUploadOutlinedIcon color="primary"  />
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Click aqui</span> para subir archivo</p>
          </div>
          :
          <div className='flex flex-col items-center justify-center pt-5 pb-6 '>
            <VerifiedOutlinedIcon color="primary" sx={{ width: 30 }} />
            <p className='text-center mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Archivo cargado <br/>{props.fileName}</span></p>
          </div>
          }
          <input id="dropzone-file"
            type="file"
            className='hidden'
            value={props.file}
            onChange={props.handleChangeFile}
          />
        </label>
      </div>
    </div>
  )
}

export default index
