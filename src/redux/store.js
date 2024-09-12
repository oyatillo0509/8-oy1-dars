import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../redux/languageSlice';
import themeReducer from '../redux/themeSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
  },
});
