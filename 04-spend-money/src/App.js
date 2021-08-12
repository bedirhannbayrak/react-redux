import './App.css';
import {Flex} from '@chakra-ui/react'
import Receipt from './components/Receipt'
import TotalMoney from './components/TotalMoney'
import Header from './components/Header'
import Items from './components/Items'

function App() {
  return (
      <Flex flexDir="column" w="80%" mx="auto" pb={10} >
        <Header/>
        <TotalMoney/>
        <Items/>
        <Receipt/>
      </Flex>
  );
}

export default App;
