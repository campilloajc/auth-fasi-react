import { createSlice } from '@reduxjs/toolkit';
import { config } from '../config/languages';

const initialState = {
   dictionary:config.spanish.dictionary,
   language:config.spanish.language
}

export const languageSlice = createSlice({
   name:'dictionary',
   initialState,
   reducers:{
      language: (state, action) => ({ ...state, ...action.payload })
   }
})

export const { language } = languageSlice.actions;

export default languageSlice.reducer;


