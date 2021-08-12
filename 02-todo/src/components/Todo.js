import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {removeTodo ,toggleCompleted , updateTodo} from '../redux/todoSlice'

const Todo = ({todo}) => {

  const [input, setInput] = useState(todo.item)

  const dispatch = useDispatch()

  function handleChange(e) {
    setInput(e.target.value)
  }

  function updateItem(e) {
    if (e.charCode === 13) {
      dispatch(updateTodo({...todo,item:input}))
    }
  }


  return (
      <li className={todo.completed ? 'completed' : null}>
        <div className="view">
          <input checked={todo.completed} onChange={() => dispatch(toggleCompleted(todo.id))}
                 className="toggle" type="checkbox"/>
          <label>
            <input value={input} onKeyPress={updateItem} onChange={handleChange}
                   className={`input-todo ${todo.completed ?
                       'completed' :
                       null}`}/>
          </label>
          <button onClick={() => {
            dispatch(removeTodo(todo.id))
          }} className="destroy"/>
        </div>
      </li>
  );
}

export default Todo