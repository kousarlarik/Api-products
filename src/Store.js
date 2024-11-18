
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/AddCarts/addCartSlice'


export const store = configureStore({
    reducer: {
        counter:counterReducer,
    },
  })