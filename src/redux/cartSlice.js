import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData'
import Aler from "../aler";


const data = localStorage.getItem('cart');
const initialState = {
  cart:!!JSON.parse(data) ? JSON.parse(data) : [],
  items:productData,
  totalPrice:0,
  totalQuntity:0
}

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart: (state, action)=>{
      
      console.log('id >>', action.payload.id);
      if(!state.cart?.find((row)=> row.id === action.payload.id)){
        state.cart.push({...action.payload, count:1});
      }else {
        //state.cart[id].count += 1;
        state.cart = state.cart?.map((row)=>{
          if(row.id === action.payload.id){
            return {...row, count: row.count+1}
          }
          else return row;
        })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
      
    },
    reduceOfCart: (state, action)=>{
      state.cart = state.cart?.map((row)=>{
        if(row.id === action.payload.id){
          if(row.count === 0){
            state.cart.pop({id:action.payload.id});
            state.cart = [];
            return;
            
          }else {
            return {...row, count: row.count-1}
            // console.log('1');
            // state.cart = state.cart?.map((row)=>{
            //   if(row.count === 0){
            //     localStorage.removeItem('cart');
            //     return null;
            //   }else return row;
            // })
          }
        }
        else return row;
      })
      if(state.cart){
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    getCartTotal:(state)=>{
      // const itemsCount = cart?.reduce((prev, current)=>{
      //   return prev + current.count;
      // },0);
      let sum = 0;
      let num =0;
      state.cart?.map((item)=>{
        sum += (item.count * item.price);
        num += item.count;
      })
      state.totalPrice = sum;
      state.totalQuntity = num;
     
    },
    update: (state)=>{
      // const localMem = JSON.parse(localStorage.getItem('cart'));
      // console.log(localMem);
      // state.cart = localMem;

      // state.cart = state.cart?.map((row)=>{
      //   if(row.count === 0){
      //     return;
      //   }else return row;
      // })
    }
  }
})

export const {addToCart, reduceOfCart,update, getCartTotal} = cartSlice.actions;

export default cartSlice.reducer;