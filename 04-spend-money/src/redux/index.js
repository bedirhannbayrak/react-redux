import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './moneySlice';

const  store = configureStore({
  reducer:{
    spend:todoReducer
  }
})

export default store

