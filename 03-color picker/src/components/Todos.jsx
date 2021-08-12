import {Flex} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import TodoColumn from './TodoColumn'

const Todos = () => {
  const colors = useSelector(state=> state.todos.colors)

  return (
      <Flex w="80%" justifyContent="space-evenly">
        {
          colors.map(color => (
                  <TodoColumn  key={color} color={color}/>
          ))
        }
      </Flex>
  );
};

export default Todos;