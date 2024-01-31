import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/CartReducer";
import FavoriteReducer from "./reducer/FavoriteReducer";

export default configureStore({
  reducer:{
    cart: CartReducer,
    favorite: FavoriteReducer
  }
})