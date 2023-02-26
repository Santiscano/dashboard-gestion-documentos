import { configureStore } from '@reduxjs/toolkit';
import { AllUsers } from '../interfaces/User';
import loginReducer from './reducers/login';

export interface AppStore {
  // userLogin: AllUsers;
}

export default configureStore<AppStore> ({
  reducer: {
    loginReducer,
    // userLogin:
  },
})
