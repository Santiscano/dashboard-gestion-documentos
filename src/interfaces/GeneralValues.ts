import { IsLoadingType } from "./Loading";
import { ValidatedUserInLogin } from './User'

export interface GeneralValuesType extends IsLoadingType {
  user: ValidatedUserInLogin;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}
