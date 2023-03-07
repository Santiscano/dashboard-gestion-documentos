import { createSlice } from '@reduxjs/toolkit';
import { AllUsers } from '../../interfaces/User';

export const EmptyUserState: AllUsers = {
  id: 0,
  name: "",
  email
}

export const userSlice = createSlice({
  name:"user",
  initialState:
})
