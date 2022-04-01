import { configureStore } from '@reduxjs/toolkit'

import ui from './ui.reducer'

const store = configureStore({
  devTools: true,
  reducer: { ui },
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
