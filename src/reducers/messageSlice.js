import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
  },
  reducers: {
    setMessage: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setMessage } = messageSlice.actions

export default messageSlice.reducer
