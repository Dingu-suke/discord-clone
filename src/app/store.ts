import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'

const store = configureStore({ 
  reducer: userReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
// 詳細は公式ドキュメント
export default store