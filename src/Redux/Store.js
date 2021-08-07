import { configureStore, } from '@reduxjs/toolkit'
import CartReducer from '../Cart/cart'

export default configureStore({
  reducer: { 
      Cart: CartReducer,
  }
})