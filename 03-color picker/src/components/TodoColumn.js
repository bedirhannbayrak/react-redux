import {useSelector} from 'react-redux'
import {Flex, Text} from '@chakra-ui/react'

const TodoColumn = ({color}) => {
  const todos = useSelector(state=>state.todos.items)
  const filterText = useSelector(state=>state.todos.filterText)
  const filteredTodos= todos.filter(i => i.color===color && i.todo.includes(filterText))

  return (
      <Flex w="22%" className="todo-column" flexDir="column" p="2">
        {
          filteredTodos.map(i=>(
              <Text px="2"  fontSize="sm" className={`${color} todo-item`} key={i.id}>{i.todo}</Text>
          ))
        }
      </Flex>
  );
};

export default TodoColumn;