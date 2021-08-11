import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: 0
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state,action) => {
      state.value += Number(action.payload);
    }
  }
});

export default todoSlice.reducer;
export const { decrease, increase ,incrementByValue } = todoSlice.actions;