import {useDispatch, useSelector} from 'react-redux'
import {changeFilter, deleteCompleteds} from '../redux/todoSlice'

const Footer = () => {

  const dispatch = useDispatch()
  const status = useSelector(state => state.todos.status)
  const todos = useSelector(state => state.todos.items)

  let unCompletedLength=0
  todos.forEach(i => {
    if (i.completed === false) {
      unCompletedLength++
    }
  })

  return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{unCompletedLength}</strong>items left
        </span>
        <ul className="filters">
          <li>
            <a href="/#" className={status === 'all' ? 'selected' : null}
               onClick={() => dispatch(changeFilter('all'))}>All</a>
          </li>
          <li>
            <a href="/#"
               className={status === 'uncompleted' ? 'selected' : null}
               onClick={() => dispatch(changeFilter('uncompleted'))}>Active</a>
          </li>
          <li>
            <a href="/#" className={status === 'completed' ? 'selected' : null}
               onClick={() => dispatch(changeFilter('completed'))}>Completed</a>
          </li>
        </ul>
        <button onClick={() => dispatch(deleteCompleteds())} className="clear-completed">
          Clear completed
        </button>
      </footer>
  );
}

export default Footer