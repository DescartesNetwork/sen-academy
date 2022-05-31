import { configureStore } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import warehouse from './warehouse.reducer'
import i18n from './i18n.reducer'

const store = configureStore({
  devTools: true,
  reducer: { ui, warehouse, i18n },
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
