import React from 'react'
import ReactDOM from 'react-dom/client'

import GeneralValuesProvider from './Context/GeneralValuesContext';
import { Provider } from 'react-redux';
import store from './Redux/store';

import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeneralValuesProvider>
    {/* <Provider store={store}> */}
      <BrowserRouter>
          <App />
      </BrowserRouter>
    {/* </Provider> */}
    </GeneralValuesProvider>
  </React.StrictMode>,
)
