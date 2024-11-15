import { createSlice } from '@reduxjs/toolkit'
import { initialChannelState } from '../Types';


const initialState: initialChannelState= {
  channelId :null,
  channelName: null
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState, // initialState: initialState という意味
  reducers: {
    setChannelsInfo: (state, action) => {
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    }
  },
})

export const { setChannelsInfo } = channelSlice.actions;
export default channelSlice.reducer;

// userReducer は sotre.ts で使用する