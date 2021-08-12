import {createSlice, nanoid} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
        {id:3216123156466,color:"red",todo:"todo 1"},
        {id:3216152136466,color:"red",todo:"todo 15"},
        {id:3216156466,color:"red",todo:"todo 25"},
        {id:32161231446,color:"blue",todo:"todo 2 "},
        {id:32161446,color:"blue",todo:"todo 3 "},
        {id:321611234656,color:"blue",todo:"todo 6 "},
        {id:321614656,color:"blue",todo:"todo 7 "},
        {id:32165151545646,color:"yellow",todo:"todo 8 "},
        {id:32161545646,color:"yellow",todo:"todo 9 "},
        {id:321611545646,color:"yellow",todo:"todo 10 "},
        {id:32164552315564,color:"green",todo:"todo 11"},
        {id:32164564,color:"green",todo:"todo 12"},
        {id:3216456451,color:"green",todo:"todo 13"},
        {id:321641241564,color:"green",todo:"todo 14"},
    ],
    colors:["green","blue","yellow", "red"],
    activeColor:"green",
    filterText:""
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({id: nanoid(), todo: action.payload, color: state.activeColor})
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    selectColor:(state,action) => {
      state.activeColor=action.payload
    },
    setFilterText:(state,action)=>{
      state.filterText=action.payload
    }
  }
});

export default todoSlice.reducer;
export const {selectColor,addTodo,setFilterText} = todoSlice.actions;