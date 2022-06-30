import { configureStore } from '@reduxjs/toolkit'
import messageReducer from '../reducers/messageSlice'

export default configureStore({
  reducer: {
    message: messageReducer,
  },
})
