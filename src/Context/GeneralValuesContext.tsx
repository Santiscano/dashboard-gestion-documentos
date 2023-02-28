import { createContext, FC, useContext, useState } from "react";
import { GeneralValuesType } from "../interfaces/GeneralValues"

export const GeneralValuesContext = createContext<GeneralValuesType>({
  isLoading: false,
  setIsLoading: () => {},
  user: {
    idroles: 0,
    idsedes: 0,
    idusers: 0,
    users_email: '',
    users_identification: '',
    users_identification_digital_check: '',
    users_identification_type: '',
    users_lastname: '',
    users_name: '',
    users_status: '',
  },
  setUser: () => {},
});

const GeneralValuesProvider: FC = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser]           = useState({});


  return (
    <GeneralValuesContext.Provider value={{
      isLoading,
      setIsLoading,
      // @ts-ignore
      user,
      setUser,
    }}>
      {children}
    </GeneralValuesContext.Provider>
  );
};

export default GeneralValuesProvider;




