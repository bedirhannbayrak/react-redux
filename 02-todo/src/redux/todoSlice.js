import {createSlice, nanoid} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'all'
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({id: nanoid(), item: action.payload, completed: false})
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    toggleCompleted: (state, action) => {
      let index = state.items.findIndex(i => i.id === action.payload)
      let item = state.items[index]
      let newItem = {...item, completed: !item.completed}
      state.items.splice(index, 1, newItem)
    },
    changeFilter: (state, action) => {
      const {payload: status} = action
      switch (status) {
        case('completed'):
          state.status = 'completed';
          break
        case('uncompleted'):
          state.status = 'uncompleted';
          break
        default:
          state.status = 'all'
      }
    },
    deleteCompleteds:(state)=> {
      state.items=state.items.filter(i => i.completed===false)
    },
    updateTodo:(state,action) => {
      const {id} = action.payload
      const index = state.items.findIndex(i => i.id===id)
      state.items[index]=action.payload
    }
  }
});

export default todoSlice.reducer;
export const {addTodo, removeTodo, toggleCompleted , changeFilter,deleteCompleteds,updateTodo} = todoSlice.actions;