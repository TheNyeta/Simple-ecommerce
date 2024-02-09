import { createSlice } from "@reduxjs/toolkit";


export const AccountReducer = createSlice({
  name:'account',
  initialState:{
    account:{},
    address:{}
  },
  reducers:{
    addAccount: (state, action) => {
      state.account = {...action.payload}
      state.address = {...action.payload.address}
    }
  }
})

export const {addAccount} = AccountReducer.actions

export default AccountReducer.reducer