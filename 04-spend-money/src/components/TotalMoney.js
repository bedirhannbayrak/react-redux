import {Box, Text} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import formatter from '../moneyFormatter'

const TotalMoney = () => {
  const totalMoney = useSelector(state=>state.spend.totalMoney)
  return (
      <Box zIndex={10} top={0} position={'sticky'} py={3} backgroundColor={'green.500'} textAlign={"center"}>
        <Text fontWeight={'extrabold'} fontSize={'4xl'}>{formatter.format(totalMoney)}</Text>
      </Box>
  );
};

export default TotalMoney;