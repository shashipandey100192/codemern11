import { configureStore } from '@reduxjs/toolkit'
import myactionlist from './Myactions';

export const store = configureStore({
  reducer: {
    counter: myactionlist,
  },
})