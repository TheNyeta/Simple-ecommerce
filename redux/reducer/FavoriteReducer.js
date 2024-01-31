import { createSlice } from "@reduxjs/toolkit";

export const FavoriteReducer = createSlice({
  name:'favorite',
  initialState:{
    favorite:[]
  },
  reducers:{
    addToFavorite: (state, action) => {
      state.favorite.push({...action.payload})
    },
    removeFromFavorite: (state, action) => {
      const newFavorite = state.favorite.filter((item) => item.id !== action.payload.id)
      state.favorite = newFavorite
    }
  }
})

export const {addToFavorite, removeFromFavorite} = FavoriteReducer.actions

export default FavoriteReducer.reducer