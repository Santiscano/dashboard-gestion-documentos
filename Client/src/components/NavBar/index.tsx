import React from 'react';
import './navbar.css'

// images
import logo from '../../assets/images/LOGOTIPO ENVIEXPRESS 85x85.png';
import user from '../../assets/images/user_svg.svg'

function index() {
  return (
    <nav className='navbar'>

      <img src={logo} alt="logo enviexpress" width={80} />

      <ul>
        
        <li>centro de costos</li>
      </ul>

      <div>
        <div>
          <h3> nombre seccion </h3>
          <h3> nombre usuario </h3>
        </div>
        <img src={user} alt="usuario icono" className='userIcon' />
      </div>

    </nav>
  )
}

export default index
