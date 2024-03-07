import { createSlice } from "@reduxjs/toolkit";

const initialState={
  value: 0
}

function increment (state){
  console.log('old', state.value);
  state.value += 1;
  console.log('new', state.value);
}
function decrement (state){
  state.value -= 1;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    increment,
    decrement
  }
}) 
export const {increment: incrementAction, decrement: decrementAction} = counterSlice.actions;

export default counterSlice.reducer;