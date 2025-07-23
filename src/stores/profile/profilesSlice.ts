import { createSlice } from '@reduxjs/toolkit'


// Create an initial state value for the reducer, with that type
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

// Create the slice and pass in the initial state
const profilesSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

// Export the generated reducer function
export default profilesSlice.reducer