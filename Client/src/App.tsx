import './App.css'

// react Router Dom
import { Route, Routes } from 'react-router-dom';

// imports modules
import Auth from './modules/Auth';
import Admin from './modules/Admin';

// Theme MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({

});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/login' element={ <Auth/> } />
        <Route path='/' element={ <Auth/> } />
        <Route path='/Admin' element={ <Admin/> } />
      </Routes>
    // </ThemeProvider>
  )
}

export default App
