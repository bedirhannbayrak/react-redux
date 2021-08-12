import {Flex, Heading, Text} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import formatter from '../moneyFormatter'

const Receipt = () => {
  const buys = useSelector(state => state.spend.buys)
  let totalPrice = 0
  Object.keys(buys).forEach(i => {
    totalPrice += buys[i].time * buys[i].price
  })
  return (
      <Flex my={2} flexDir={'column'} placeItems={'center'}
            backgroundColor={'gray.300'} py={5}>

        <Heading mb={4} as="h2">Your Receipt</Heading>
        <Flex w="50%" borderBottom={'2px'} borderColor={'gray.600'} py={5}
              flexDir="column">
          {
            Object.keys(buys).map((key, v) => (
                <Flex key={key} justifyContent={'space-between'}
                      alignItems="center">
                  {
                    buys[key].time ? (<>
                          <Text flex={3} fontWeight={'semibold'}
                                fontSize={'xl'}>{buys[key].name}</Text>
                          <Flex flex={4} w="50%"
                                justifyContent={'space-between'}
                                alignItems={'center'}>
                            <Text mx={2} fontWeight={'semibold'}
                                  fontSize={'xl'}> x{buys[key].time}</Text>
                            <Text fontWeight={['light', 'medium', 'extrabold']}
                                  fontSize={'xl'}>{formatter.format(
                                buys[key].price)}</Text>
                          </Flex>
                        </>

                    ) : null
                  }
                </Flex>
            ))
          }
        </Flex>

        <Flex mt={2} w="50%" justifyContent={'space-between'}>
          <Text fontWeight={['light', 'medium', 'bold']}
                fontSize={'xl'}>TOTAL:</Text>
          <Text fontWeight={['light', 'medium', 'extrabold']}
                fontSize={'xl'}>{formatter.format(totalPrice)}</Text>
        </Flex>
      </Flex>
  );
};

export default Receipt;