import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set } = messageSlice.actions

export default messageSlice.reducer
