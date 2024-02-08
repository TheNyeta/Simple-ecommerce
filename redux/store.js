import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/CartReducer";
import FavoriteReducer from "./reducer/FavoriteReducer";
import SearchReducer from "./reducer/SearchReducer";
import OrderReducer from "./reducer/OrderReducer";
import AccountReducer from "./reducer/AccountReducer";

export default configureStore({
  reducer:{
    cart: CartReducer,
    favorite: FavoriteReducer,
    searchHistory: SearchReducer,
    orderHistory: OrderReducer,
    account: AccountReducer
  }
})