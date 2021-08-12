import {Button, Flex, Textarea, VStack} from '@chakra-ui/react'
import ColorPalette from './ColorPalette'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {addTodo} from '../redux/todoSlice'

const InputTodo = () => {
  const dispatch = useDispatch()
  const [todo,setTodo] = useState("")

  return (
      <VStack w={"100%"} spacing={5} >
        <Textarea value={todo} w="80%" placeholder={"Enter your note here"} onChange={(e)=> setTodo(e.target.value)}/>
        <Flex w="80%" justifyContent="space-between">
          <ColorPalette/>
          <Button variant="solid" colorScheme="teal" onClick={()=> dispatch(addTodo(todo))} >Add</Button>
        </Flex>
      </VStack>
  );
};

export default InputTodo;