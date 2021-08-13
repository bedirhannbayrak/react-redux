import {createSlice} from '@reduxjs/toolkit'

const memorySlice = createSlice({
  name: 'memory',
  initialState: {
    items: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P'],
    shuffledItems: [],
    completedItems: [],
    checkItemsList: [],
    point: 0
  },
  reducers: {
    shuffleItems: (state) => {
      let array = [...state.items, ...state.items]
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      state.shuffledItems = array
    },
    checkItems: (state) => {
      if (state.checkItemsList.length === 2
          && state.checkItemsList[0].name === state.checkItemsList[1].name
          && state.checkItemsList[0].index !== state.checkItemsList[1].index) {
        state.completedItems.push(state.checkItemsList[0].name)
        state.point += 50
        state.checkItemsList = []
      } else if (state.checkItemsList.length >= 2) {
        state.point -= 10
        state.checkItemsList = []
      }
    },
    clickItem: (state, action) => {
      const {name, index} = action.payload
      state.checkItemsList.push({name, index})
    },
    restartGame: (state) => {
      let array = [...state.items, ...state.items]
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      state.shuffledItems = array
      state.completedItems = []
      state.checkItemsList = []
      state.point = 0
    }
  }
});

export default memorySlice.reducer;
export const {shuffleItems, clickItem, checkItems,restartGame} = memorySlice.actions;