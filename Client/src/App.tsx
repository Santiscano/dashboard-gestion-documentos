import './App.css'

// react Router Dom
import { Route, Routes } from 'react-router-dom';

// imports modules
import Auth from './modules/Auth';
import Admin from './modules/Admin';



function App() {

  return (
      <Routes>
        <Route path='/login' element={ <Auth/> } />
        <Route path='/' element={ <Auth/> } />
        <Route path='/Admin' element={ <Admin/> } />
      </Routes>
  )
}

export default App
