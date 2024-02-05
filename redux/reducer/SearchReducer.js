import { createSlice } from "@reduxjs/toolkit";

export const SearchReducer = createSlice({
  name:'search',
  initialState:{
    searchHistory:[]
  },
  reducers:{
    addToSearchHistory: (state, action) => {
      const newSearchHistory = state.searchHistory.filter((keyword) => keyword !== action.payload)
      newSearchHistory.unshift(action.payload)
      state.searchHistory = newSearchHistory
    },
    removeFromSearchHistory: (state, action) => {
      const newSearchHistory = state.searchHistory.filter((keyword) => keyword !== action.payload)
      state.searchHistory = newSearchHistory
    }
  }
})

export const {addToSearchHistory, removeFromSearchHistory} = SearchReducer.actions

export default SearchReducer.reducer