import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name:'cart',
  initialState:{
    cart:[],
    coupon: {}
  },
  reducers:{
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({...action.payload, quantity: 1})
      }
    },
    removeFromCart: (state, action) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload.id)
      state.cart = newCart
    },
    increaseQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id)
      itemInCart.quantity++
    },
    decreaseQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id)
      if (itemInCart.quantity === 1) {
        itemInCart.quantity = 0
        const newCart = state.cart.filter((item) => item.id !== action.payload.id)
        state.cart = newCart
      } else {
        itemInCart.quantity--
      }
    },
    cleanCart: (state) => {
      state.cart = []
    },
    addCoupon: (state, action) => {
      state.coupon = {...action.payload}
    },
    cleanCoupon: (state) => {
      state.coupon = {}
    }
  }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cleanCart, addCoupon, cleanCoupon} = CartSlice.actions

export default CartSlice.reducer