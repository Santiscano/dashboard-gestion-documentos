import './App.css'
import { Route, Routes } from 'react-router-dom';
import Auth from './modules/Auth';
import Admin from './modules/Admin';
import { Paper, ThemeProvider } from '@mui/material';
import { Styles }  from './config/theme.config'
import Updates from './Layout/Updates';
import { AuthProvider} from './context/AuthContext'
import Provider from './Layout/Provider';
import Ti from './Layout/Ti';
// import { ThemeModeProvider } from './context/ThemeMode';
import { getRoles, createRol, editRol, deleteRol } from './services/Roles.routes'
import { getCedis, createCedi, editCedi, deleteCedi } from './services/Cedis.routes'
import { validateUser, getUsers, createUser, editUser, deleteUser } from './services/Users.routes'
import { getFiles, addFile, editFile, deleteFile } from './services/Files.routes';
import { getStatesFiles, addStateFile, editStateFile, deleteStateFile } from './services/StateFiles.routes';
import { getCostArea, createCostArea, editCostArea, deleteCostArea } from './services/CostAreas.routes';
import { getFilesPath, createFilePath } from './services/FilesPath.routes';
import { useEffect } from 'react';
import Requerimientos from './assets/Requerimientos.pdf'
import { NotFound } from './modules/NotFound';


function App() {
  return (
    <AuthProvider>
      {/* <ThemeModeProvider> */}

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

      {/* </ThemeModeProvider> */}
    </AuthProvider>
  )
}

export default App
