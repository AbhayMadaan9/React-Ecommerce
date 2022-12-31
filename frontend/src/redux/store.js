import { configureStore } from '@reduxjs/toolkit'
import cartRedux from './cartRedux'
import userRedux from './userRedux'


export const store = configureStore({
  reducer: {
    cart: cartRedux,
    user: userRedux
  },
})