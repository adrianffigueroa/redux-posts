import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    name: 'Adrian',
  },
  {
    id: 2,
    name: 'Paola',
  },
  {
    id: 3,
    name: 'Cristian',
  },
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
