import {createSlice} from '@reduxjs/toolkit'

const moneySlice = createSlice({
  name: 'spend',
  initialState: {
    items: [
      {
        id:"asddfsaadfs",
        name:"Big Mac",
        price:2,
        img:"https://webstockreview.net/images/hamburger-clipart-pdf-1.png"
      },
      {
        id:"asddadsffsas",
        name:"Jet Ski",
        price:12000,
        img:"https://neal.fun/spend/images/jet-ski.jpg"
      },
      {
        id:"asddfsasdfas",
        name:"Ferrari",
        price:250000,
        img:"https://neal.fun/spend/images/ferrari.jpg"
      },
      {
        id:"kmdfdfsgdsggjsd",
        name:"Boeing 747",
        price:148000000,
        img:"https://neal.fun/spend/images/boeing-747.jpg"
      },
      {
        id:"kmdfgjsasddfgsd",
        name:"Skyscraper",
        price:850000000,
        img:"https://neal.fun/spend/images/skyscraper.jpg"
      },
      {
        id:"kmdfgjsd",
        name:"Cruise Ship",
        price:930000000,
        img:"https://neal.fun/spend/images/cruise-ship.jpg"
      },
      {
        id:"lsadjflkajf",
        name:"NBA Team",
        price:2120000000,
        img:"https://neal.fun/spend/images/nba-team.jpg"
      },

    ],
    totalMoney:100_000_000_000,
    buys:{
    }
  },
  reducers: {
    buyItem: (state, action) => {
      const {price,id,name} = action.payload
      state.totalMoney-=price
      if (Object.keys(state.buys).indexOf(id) === -1) {
        state.buys[id]={
          name,
          price,
          time:1
        }
      }else{
        state.buys[id]={
          ...state.buys[id],
          time:state.buys[id].time+1
        }
      }
    },
    sellItem: (state, action) => {
      const {price,id} = action.payload
      state.totalMoney+=price
      if (Object.keys(state.buys).indexOf(id) !== -1) {
        if(state.buys[id].time===1){
          state.buys[id].time=0
        }else{
          state.buys[id].time-=1
        }
      }
    },
  }
});

export default moneySlice.reducer;
export const {buyItem, sellItem} = moneySlice.actions;