import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './featues/Users/UserSlice'
export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})

