import {Button, Text} from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import {checkItems, clickItem} from '../redux/memorySlice'
import {useState} from 'react'

const Item = ({item, index}) => {

  const dispatch = useDispatch()
  const completedItems = useSelector(state => state.memory.completedItems)
  const checkItemsList = useSelector(state => state.memory.checkItemsList)
  let willShown = completedItems.includes(item) ||
      checkItemsList.some(i => i.index === index && i.name === item)
  let disabled = willShown || checkItemsList.length >= 2
  const done = completedItems.includes(item)

  const className = `${done && 'done'} ${disabled && "disabled"}`

  function handleClick(e) {
    if (disabled) {
      return
    }
    dispatch(clickItem({name: item, index}))
    setTimeout(() => {
      dispatch(checkItems())
    }, 1200)
  }

  return (
      <Button isDisabled={willShown}
              onClick={handleClick}
              bg={'pink.600'}
              height={'80px'}
              item={item}
              className={className}>
        <Text fontSize={'4xl'} fontWeight={'extrabold'}>{willShown && item}</Text>
      </Button>
  );
};

export default Item;