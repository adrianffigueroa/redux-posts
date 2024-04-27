import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Content 1',
    date: '25/11/2022, 12:00:00',
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'Content 2',
    date: '25/11/2022, 14:00:00',
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toLocaleString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        }
      },
    },
    addReaction: (state, action) => {
      const { postId, reaction } = action.payload
      const post = state.find((post) => post.id === postId)
      if (post) {
        post.reactions[reaction]++
      }
    },
  },
})

export const selectAllPosts = (state) => state.posts

export const { addPost, addReaction } = postsSlice.actions

export default postsSlice.reducer
