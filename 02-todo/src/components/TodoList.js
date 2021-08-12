import Todo from "./Todo";
import {useSelector} from 'react-redux'

const TodoList = () => {
  const todos = useSelector(state=> state.todos.items)
  const status = useSelector(state=> state.todos.status)

  let filteredTodos=todos
  if (status === 'completed') {
    filteredTodos=todos.filter(i => i.completed===true)
  }else if (status === 'uncompleted') {
    filteredTodos=todos.filter(i => i.completed===false)
  }
  return (
      <ul className="todo-list">
        {
          filteredTodos?.map(todo=> (
              <Todo key={todo.id} todo={todo} />
          ))
        }
      </ul>
  );
}

export default TodoList