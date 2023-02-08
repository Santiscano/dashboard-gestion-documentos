import './App.css'
import { Route, Routes } from 'react-router-dom';
import Auth from './modules/Auth';
import Admin from './modules/Admin';
import { ThemeProvider } from '@mui/material';
import Styles  from './components/tools/Style'
import Updates from './Layout/Updates';
import { AuthProvider} from './hooks/context/AuthContext'
import Provider from './Layout/Provider';



function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={Styles}>
        <Routes>
          <Route path='/login' element={ <Auth/> } />
          <Route path='/' element={ <Auth/> } />

          <Route path='/admin' element={ <Admin/> }>
            <Route path='provider' element={<Provider/>} />
            <Route path='updates' element={<Updates/>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
