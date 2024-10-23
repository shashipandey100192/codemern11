import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "ravi singh",
  }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.username = "pankaj";
    }
  },
})


export const { increment} = counterSlice.actions

export default counterSlice.reducer