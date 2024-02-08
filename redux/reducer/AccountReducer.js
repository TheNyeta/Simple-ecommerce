import { createSlice } from "@reduxjs/toolkit";


export const AccountReducer = createSlice({
  name:'account',
  initialState:{
    account:{}
  },
  reducers:{
    addAccount: (state, action) => {
      state.account = {...action.payload}
    }
  }
})

export const {addAccount} = AccountReducer.actions

export default AccountReducer.reducer