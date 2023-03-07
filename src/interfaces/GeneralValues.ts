import { IsLoadingType } from "./Loading";
import { ValidatedUserInLogin } from './User'

export interface GeneralValuesType extends IsLoadingType {
  errorLogin: string;
  setErrorLogin: React.Dispatch<React.SetStateAction<string>>;
  user?: ValidatedUserInLogin;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}
