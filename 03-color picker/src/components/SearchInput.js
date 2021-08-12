import {Button, Flex, Input} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import {setFilterText} from '../redux/todoSlice'
import {useState} from 'react'

const SearchInput = () => {
  const [search,setSearch] = useState("")
  const dispatch = useDispatch()

  return (
      <Flex w="80%" alignItems="baseLine" justifyContent={"center"}>
        <Input flex="1" mr={5} onChange={(e)=> setSearch(e.target.value) } w={"80%"} mt={5} placeholder={"Search"}/>
        <Button onClick={()=> dispatch(setFilterText(search))}>Filter</Button>
      </Flex>
  );
};

export default SearchInput;