import { createSlice } from '@reduxjs/toolkit'
import { InitialUserState } from '../Types';


const initialState: InitialUserState= {
  user :null
}

export const userSlice = createSlice({
  name: 'user',
  initialState, // initialState: initialState という意味
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
})

console.log(userSlice)
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

// userReducer は sotre.ts で使用する