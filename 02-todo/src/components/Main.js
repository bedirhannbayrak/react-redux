import TodoList from "./TodoList";

const Main = ({editTodo,toggleAll,todos,deleteTodo,toggleComplete}) => {

  return (
      <section className="main">
            <input onClick={toggleAll} className="toggle-all" type="checkbox"/>
              <label onClick={toggleAll} htmlFor="toggle-all">
                  Mark all as complete
              </label>
              <TodoList editTodo={editTodo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} todos={todos} />
      </section>
  );
}

export default Main
