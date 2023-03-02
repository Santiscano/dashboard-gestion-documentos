import { useState } from 'react';
import './App.css'

import Auth from './modules/Auth';
import Admin from './modules/Admin';
// import { NotFound } from './modules/NotFound';
import Error from './components/common/error';
import Updates from './Layout/Updates';
import Provider from './Layout/Provider';
import Ti from './Layout/Ti';
import forbidden403Img from './assets/images/403.jpg';
import notFound404Img from './assets/images/404.png';
import errorServerImg from './assets/images/500.jpg';


import { Paper, ThemeProvider } from '@mui/material';

import { Styles }  from './config/theme.config'

import { Route, Routes } from 'react-router-dom';
import WithAuthentication from './Middlewares/WithAuthentication';
import Home from './Layout/Home/index';

function App() {
  return (
    <ThemeProvider theme={Styles}>
      <Paper>
        <Routes>
          <Route index element={ <Auth /> } />
          <Route path='/login' element={ <Auth /> } />

          <Route
            element={<WithAuthentication/>}
          >
            <Route path='/dashboard'  element={ <Admin/> }>
              <Route path='home' element={<Home/>} />
              <Route path='radicados' element={<Provider/>} />
              <Route path='auditoria' element={<Provider/>} />
              <Route path='gerencia' element={<Provider/>} />
              <Route path='contabilidad' element={<Provider/>} />
              <Route path='tesoreria' element={<Updates/>} />
              <Route path='ti' element={<Ti/>} />
            </Route>
          </Route>


          <Route path="forbidden403" element={<Error
            title="No cuentas con los permisos"
            image={forbidden403Img}
            message1="No tienes los permisos para acceder a esta ruta"
            message2='si consideras que es un error comunicate con el encargado de TI'
          />}/>

          <Route path="errorserver500" element={<Error
            title="Error Interno del servidor"
            image={errorServerImg}
            message1="Disculpanos por los inconvenientes estamos trabajando en solucionarlo"
            message2='intenta nuevamente o comunicate con el area encargada'
          />}/>

          <Route path="*" element={ <Error
            title="La Ruta no fue encontrada"
            image={notFound404Img}
            message1="La pagina que estás buscando no está disponible"
            message2="Intente buscar de nuevo o use el botón Regresar para continuar."
          />}/>
        </Routes>
      </Paper>
    </ThemeProvider>
  )
}

export default App
