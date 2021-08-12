import {Button, Flex, Image, Input, Text} from '@chakra-ui/react'

import {useDispatch, useSelector} from 'react-redux'
import {buyItem, sellItem} from '../redux/moneySlice'
import {useState} from 'react'
import formatter from '../moneyFormatter'

const Item = ({item}) => {

  const [buyTime,setBuyTime] = useState(0)
  const dispatch = useDispatch()
  const totalMoney = useSelector(state=>state.spend.totalMoney)

  function handleBuy(e) {
    if (item.price <= totalMoney) {
      dispatch(buyItem(item))
      setBuyTime((prev)=> prev+1)
    }
  }

  function handleSell(e) {
    if (buyTime > 0) {
      setBuyTime((prev)=> prev-1)
      dispatch(sellItem(item))
    }
  }

  return (
      <Flex boxShadow="md" bg={'aliceblue'} flexDir={"column"} alignItems={"center"} justifyContent={"center"} borderRadius={'md'} >
        <Image

            mt={2}
            boxSize="150px"
            objectFit={'contain'}
            src={item.img}
            alt="Dan Abramov"
        />
        <Text mt={2} fontWeight={'bold'} fontSize={'xl'}>{item.name}</Text>
        <Text color={"green.600"} mt={1} fontWeight={'bold'} fontSize={'xl'}>{formatter.format(item.price)}</Text>
        <Flex my={4} px={3} justifyContent={"space-between"}>
          <Button isDisabled={buyTime<1} w="50%" px={2} variant={'solid'} colorScheme={"pink"}  onClick={handleSell} > Sell</Button>
          <Input fontSize={"xl"} textAlign={"center"} mx={2} disabled value={buyTime}/>
          <Button isDisabled={item.price > totalMoney}  w="50%" px={2} variant={'solid'} colorScheme={"teal"} onClick={handleBuy} > Buy</Button>
        </Flex>
      </Flex>
  );
};

export default Item;