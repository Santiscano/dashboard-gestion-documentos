import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'
import { session } from '../components/tools/SesionSettings'

const WithAuthentication = () => {
  const navigate = useNavigate();
  const token = session();
  console.log('token: ', token);

  useEffect(()=>{
    if(!token) {
      navigate("/login")
    }
  },[])

  return <Outlet />;
}

export default WithAuthentication
