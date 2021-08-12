import { useDispatch, useSelector } from 'react-redux';
import { increase ,decrease, incrementByValue} from '../redux/todoSlice';
import { useState } from 'react';

const Todo = () => {

  const todo = useSelector((state)=> state.todos.value)
   const dispatch = useDispatch()
  const [value,setValue] = useState(1)
  return (
    <div>
      {todo}
      <button onClick={()=> {dispatch(increase())}}>+</button>
      <button onClick={()=> {dispatch(decrease())}}>-</button>
      <input value={value} type="number" onChange={(e) => setValue(e.target.value)} />
      <button onClick={()=> {dispatch(incrementByValue(value))}}>increment</button>
    </div>
  );
};

export default Todo;