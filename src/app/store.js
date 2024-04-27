import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/post/postsSlice'
import usersReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
