import { useState } from 'react';
import { createUser } from '../../services/Firebase.routes'

function index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail     = (e:any) => {setEmail(e.target.value)};
  const handlePassword  = (e:any) => {setPassword(e.target.value)};


  const handleCreateUserSubmit = (e:any) => {
    e.preventDefault()
    createUser(email, password);
  }
  return (
    <div className='layout'>
      <section className='layout-section'>
        <div className='layout-left'>
          <div className='container__createFiling'>
            <h3 className='createFiling'>Administracion & Gestion de Plataforma TI</h3>
          </div>
          <form onSubmit={handleCreateUserSubmit}>
            <input
            type="text"
            value={email}
            onChange={handleEmail} />
            <input
            type="text"
            value={password}
            onChange={handlePassword} />
            <button className="button button--flex mt-4 relative top-4" >Crear Usuario</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default index
