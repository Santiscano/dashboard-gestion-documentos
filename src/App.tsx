import { useState } from 'react';
import './App.css'

import Auth from './modules/Auth';
import Admin from './modules/Admin';
import { NotFound } from './modules/NotFound';
import Updates from './Layout/Updates';
import Provider from './Layout/Provider';
import Ti from './Layout/Ti';

import { Paper, ThemeProvider } from '@mui/material';

import { Styles }  from './config/theme.config'

import { Route, Routes } from 'react-router-dom';
import WithAuthentication from './Middlewares/WithAuthentication';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



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
              <Route path='radicados' element={<Provider/>} />
            </Route>
          </Route>


              <Route path='updates' element={<Updates/>} />
              <Route path='ti' element={<Ti/>} />


          <Route path="*" element={ <NotFound/>}/>
        </Routes>
      </Paper>
    </ThemeProvider>
  )
}

export default App
