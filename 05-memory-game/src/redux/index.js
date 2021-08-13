import { configureStore } from '@reduxjs/toolkit';
import memoryReducer from './memorySlice';

const  store = configureStore({
  reducer:{
    memory:memoryReducer
  }
})

export default store

