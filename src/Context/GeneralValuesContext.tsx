import { createContext, FC, useContext, useState } from "react";
import { GeneralValuesType } from "../interfaces/GeneralValues"

export const GeneralValuesContext = createContext<GeneralValuesType>({
  preLoad: false,
  setPreLoad: () => {},
  isLoading: false,
  setIsLoading: () => {},
  errorLogin: '',
  setErrorLogin: () => {},
  user: {
    idroles: 0,
    idsedes: 0,
    idusers: 0,
    roles: '',
    sedes_city: '',
    sedes_name: '',
    users_email: '',
    users_identification: '',
    users_identification_type: '',
    users_lastname: '',
    users_name: '',
    users_status: '',
  },
  setUser: () => {},
});

const GeneralValuesProvider: FC = ({ children }: any) => {
  const [preLoad, setPreLoad]     = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorLogin, setErrorLogin]=useState('');
  const [user, setUser]           = useState({});


  return (
    <GeneralValuesContext.Provider value={{
      preLoad,
      setPreLoad,
      isLoading,
      setIsLoading,
      errorLogin,
      setErrorLogin,
      // @ts-ignore
      user,
      setUser,
    }}>
      {children}
    </GeneralValuesContext.Provider>
  );
};

export default GeneralValuesProvider;




