import React, { useContext } from 'react';
import './auth.css';

// components
import FormLogin from '../../components/common/FormLogin';
import Loading from '../../components/common/Loading';
// images
import security from '../../assets/images/cyber-security.png';
import logo from '../../assets/images/LOGOTIPO ENVIEXPRESS 85x85.png'
import { GeneralValuesContext } from '../../Context/GeneralValuesContext';



function index() {
  const { isLoading, setIsLoading } = useContext(GeneralValuesContext);


  React.useEffect(()=> {
    setTimeout(()=> {
      setIsLoading(false);
    }, 1500)
  },[])

  return (
    <>
      { isLoading ?
      <div className='w-screen h-screen flex flex-col justify-center'>
        <Loading/>
      </div>
      :
      <div className='login sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 min-h-screen '>
        {/* left */}
        <div className='flex items-center justify-center w-auto min-h-screen md:w-1/2 md:py-4 md:px-4 p-4 md:p-4 rounded-2xl md:rounded-none shadow md:shadow-none'>
          <div className='w-full max-w-80 sm:w-80 mx-auto sm:mx-0 '>
            {/* logo */}
            <div className='flex justify-center'>
              <img src={logo} alt="logo enviexpress" className='w-40' />
            </div>

            {/* titulo */}
            <h3 className='mt-8 text-2xl font-extrabold tracking-tight leading-tight'>Ingresar</h3>

            <FormLogin />
          </div>
        </div>

        <div className='bg-rigth relative hidden md:flex flex-auto flex-col items-center justify-center w-1/2 min-h-screen p-16 lg:px-16 overflow-hidden dark:border-l'>
            <img src={security} alt="segurity login" className='max-w-xs' />
            <div>
              <h2 className='text-white text-4xl mt-8'>Logística de Gestión</h2>
              <h4 className='text-white text-l mt-2'>aliado estratégico para tu negocio</h4>
            </div>
        </div>
      </div>
      }
    </>
  )
}

export default index
