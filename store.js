import { configureStore } from '@reduxjs/toolkit';
import demoReduxSlice from './src/reduxtoolkit/DemoReduxSlice';

//configureStore: function của redux-toolkit, dùng để chứa các reducer của project;
export const store = configureStore({
  reducer: {
    demoReduxSlice
  },
});