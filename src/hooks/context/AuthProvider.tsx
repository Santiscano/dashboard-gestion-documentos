import { useReducer } from 'react'
// import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer';

import { types } from '../../types/types';

const initialState = {
  logged: false,
}

const AuthProvider = ({ children }:any) => {

  const  [ authState, dispatch ] = useReducer(authReducer, initialState);

  const login = ( email: string, password: string ) => {
    const action = {
      type: types.login,
      payload: {
        email: 'santiago.sierra@teclab.com.co',
        password: '1234',
        name: 'santiago sierra'
      }
    }
    dispatch(action)
  }
  
  useReducer( authReducer, {})

  return (
    // <AuthContext.Provider value={{}}>
      { children }
    // </AuthContext.Provider>
  )
}

export default AuthProvider
