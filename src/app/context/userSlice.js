import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageJson } from '../utils/getLocalStorageJson';

const userData = getLocalStorageJson();

const initialState = {
   user: userData,
   logout: userData ? true : false,
}

export const userSlice = createSlice({
   name:'user',
   initialState,
   reducers:{
      user: (state, action) => ({ ...state, ...action.payload })
   }
})

export const { user } = userSlice.actions;

export default userSlice.reducer;


