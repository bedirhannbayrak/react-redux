import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/todoSlice'

const Header = () => {

  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (todo.length > 0) {
      dispatch(addTodo(todo))
      setTodo("")
    }

  }

  return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input value={todo} onChange={handleChange} className="new-todo"
                 placeholder="What needs to be done?" autoFocus/>
        </form>
      </header>
  );
}

export default Header