import { configureStore } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import warehouse from './warehouse.reducer'

const store = configureStore({
  devTools: true,
  reducer: { ui, warehouse },
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
