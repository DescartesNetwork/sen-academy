import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { LanguageType } from 'constant'
import configs from 'configs'

const {
  warehouse: { source },
} = configs

/**
 * Interface & Utility
 */

export type SingleArticleData = {
  title: string
  contents: string
}
export type ArticleData = Record<LanguageType, SingleArticleData> & {
  createdAt: number
  updatedAt: number
  thumbnail: string
  category: string[]
}
export type WarehouseState = Record<string, ArticleData>

const fetchWarehouse = async () => {
  try {
    const res = await fetch(source)
    return await res.json()
  } catch (er) {
    return {}
  }
}

/**
 * Store constructor
 */

const NAME = 'warehouse'
const initialState: WarehouseState = {}

/**
 * Actions
 */

// Must fetch register at very first of the process
export const loadWarehouse = createAsyncThunk(
  `${NAME}/loadWarehouse`,
  async () => {
    const warehouse = await fetchWarehouse()
    return { ...warehouse }
  },
)

export const upsetWarehouse = createAsyncThunk(
  `${NAME}/upsetWarehouse`,
  async ({ article }: { article: ArticleData }) => {
    return { ...article }
  },
)

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      loadWarehouse.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
