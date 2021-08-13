import './App.css';
import {Button, Flex, Heading, SimpleGrid, Spacer, Text} from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import {restartGame, shuffleItems} from './redux/memorySlice'
import Item from './components/Item'
import {useEffect} from 'react'

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(shuffleItems())
  },[])



  const shuffledItems = useSelector(state => state.memory.shuffledItems)
  const points = useSelector(state => state.memory.point)
  return (
      <Flex alignItems={'center'} justify={"center"} flexDir={"column"} w="90%" mx="auto" pb={10} >
        <Heading mt={2}>Memory Game</Heading>
        <SimpleGrid w={"80%"} mt={"5"} spacing={3} columns={5} >
          {
            shuffledItems.map((item,index)=>(
                <Item key={index} index={index} item={item}/>
            ))
          }
        </SimpleGrid>
        <Flex mt={4}  w={"80%"} justify={'space-between'}>
          <Heading mr={5} size={'lg'}>Points : <Text color={points<0 ? "red" : "green"} as={"span"}>{points}</Text> </Heading>
          <Button variant={'solid'} colorScheme={'red'}
                  onClick={()=> {dispatch(restartGame())}}>Restart Game</Button>
        </Flex>
      </Flex>
  );
}

export default App;
