import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/CartReducer";
import FavoriteReducer from "./reducer/FavoriteReducer";
import SearchReducer from "./reducer/SearchReducer";

export default configureStore({
  reducer:{
    cart: CartReducer,
    favorite: FavoriteReducer,
    searchHistory: SearchReducer
  }
})