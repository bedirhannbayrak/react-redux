import {useDispatch, useSelector} from 'react-redux'
import {HStack} from '@chakra-ui/react'
import {selectColor} from '../redux/todoSlice'

const ColorPalette = () => {

  const colors = useSelector(state=>state.todos.colors)
  const dispatch = useDispatch()

  return (
      <HStack spacing={4}>
        {
          colors.map(color => (
              <div key={color} className={`${color} colorbox`} onClick={()=>dispatch(selectColor(color))} />
          ))
        }
      </HStack>
  );
};

export default ColorPalette;