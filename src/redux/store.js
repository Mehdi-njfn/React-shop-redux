import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import counterReducer from '../counterSlice';
import postReducer from '../postSlice';


export const store = configureStore({
  reducer:{
    shopCart: cartReducer,
    counter: counterReducer,
    posts: postReducer,
  },
})
