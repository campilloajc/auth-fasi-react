import { configureStore, combineReducers } from '@reduxjs/toolkit';
import languageState from './languageSlice';
import userState from './userSlice';

const rootReducer = combineReducers({
   languageState,
   userState
});

export const store = configureStore({
   reducer:{
      rootReducer
   }
})