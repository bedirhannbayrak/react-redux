import './App.css';
import {Heading, VStack} from '@chakra-ui/react'
import Todos from './components/Todos'
import InputTodo from './components/InputTodo'
import SearchInput from './components/SearchInput'

function App() {
  return (
      <VStack mt={10} mx={"auto"} spacing={10} width="80%" flexDir={"column"} justify="center" alignItems="center">
        <Heading>Notes App</Heading>
        <SearchInput/>
        <InputTodo/>
        <Todos/>
      </VStack>
  );
}

export default App;
