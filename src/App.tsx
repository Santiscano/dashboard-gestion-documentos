import './App.css'
import { Route, Routes } from 'react-router-dom';
import Auth from './modules/Auth';
import Admin from './modules/Admin';
import { Paper, ThemeProvider } from '@mui/material';
import { Styles }  from './config/theme.config'
import Updates from './Layout/Updates';
import Provider from './Layout/Provider';
import Ti from './Layout/Ti';
import { NotFound } from './modules/NotFound';



function App() {
  return (
    <ThemeProvider theme={Styles}>
      <Paper>
        <Routes>
          <Route path='/login' element={ <Auth/> } />
          <Route path='/' element={ <Auth/> } />
          <Route path='/admin' element={ <Admin/> }>
            <Route path='provider' element={<Provider/>} />
            <Route path='updates' element={<Updates/>} />
            <Route path='ti' element={<Ti/>} />
          </Route>
          <Route path="*" element={ <NotFound/>}/>
        </Routes>
      </Paper>
    </ThemeProvider>
  )
}

export default App
