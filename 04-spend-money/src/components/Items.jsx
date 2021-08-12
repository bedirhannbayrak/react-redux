import Item from './Item'
import {SimpleGrid} from '@chakra-ui/react'
import {useSelector} from 'react-redux'

const Items = () => {
  const items = useSelector(state=>state.spend.items)
  return (
      <SimpleGrid px={1} my={5} minChildWidth="300px" spacing="40px">
        {
          items.map(item=>(
              <Item key={item.id} item={item}/>
          ))
        }
      </SimpleGrid>
  );
};

export default Items;