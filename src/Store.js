
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/AddCarts/addCartSlice'
import productReducer from './slices/productSlice/ProductSlice'



export const store = configureStore({
    reducer: {
        counter:counterReducer,
        product:productReducer,
    },
  });
 