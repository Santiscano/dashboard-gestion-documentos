import './App.css'

// react Router Dom
import { Route, Routes } from 'react-router-dom';

// imports modules
import Auth from './modules/Auth';
import Admin from './modules/Admin';

// theme mui config
import { ThemeProvider } from '@mui/material';
import Styles  from './components/tools/Style'



function App() {

  return (
    <ThemeProvider theme={Styles}>
      <Routes>
        <Route path='/login' element={ <Auth/> } />
        <Route path='/' element={ <Auth/> } />
        <Route path='/admin' element={ <Admin/> } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
