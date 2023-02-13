import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
// import { ThemeModeProvider } from './context/ThemeMode';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeModeProvider> */}
        <App />
      {/* </ThemeModeProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
