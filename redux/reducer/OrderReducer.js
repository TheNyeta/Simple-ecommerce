import { createSlice } from "@reduxjs/toolkit";


export const OrderReducer = createSlice({
  name:'order',
  initialState:{
    orderHistory:[]
  },
  reducers:{
    addToOrderHistory: (state, action) => {
      state.orderHistory.push({...action.payload})
    }
  }
})

const {addToOrderHistory} = OrderReducer.actions

export default OrderReducer.reducer