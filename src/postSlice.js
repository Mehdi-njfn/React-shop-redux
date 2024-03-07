
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetch', 
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const response = await fetch('https://cataas.com/api/cats?skip=0&limit=100')
    
    const data = await response.json();

    return data;
  }
)

const initialState = {
  postList: [],
  fetchingPosts: false,
  errorMessage: null
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder)=>{
    builder.addCase(fetchPosts.fulfilled, (state ,action)=>{
      state.postList = action.payload  // read of 9 line
      state.fetchingPosts = false      
    })
    .addCase(fetchPosts.pending, (state)=>{
      state.fetchingPosts = true
    })
    .addCase(fetchPosts.rejected, (state)=>{
      state.fetchingPosts = false
      state.errorMessage = 'error'
    })
  }

})

export default postSlice.reducer