import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { defaultLang, supportedLangs } from '../static/base/multilangData'

import { enSystem } from '../static/base/system-en'
import { vnSystem } from '../static/base/system-vn'
import { LanguageType } from 'constant'

const NAME = 'i18n'
type i18nState = {
  lang: LanguageType
  supportedLangs: {}
  translations: Record<LanguageType, any>
}
const initialState: i18nState = {
  lang: defaultLang, // "en" when app loads
  supportedLangs: { ...supportedLangs },
  // We'll keep our translations in Redux to start.
  // Later on we'll move them to their own files so
  // that they're easier to manage.
  translations: {
    en: {
      system: enSystem,
      post: [{ tagline: 'Continuous improvement', ratings: 'Ratings' }],
    },
    vn: {
      system: vnSystem,
      post: [{ tagline: 'Ständige Verbesserung', ratings: 'Bewertungen' }],
    },
  },
}

export const loadInitialData = createAsyncThunk<{}, void, { state: any }>(
  `${NAME}/loadInitialData`,
  async (_, { getState }) => {
    const {
      warehouse,
      i18n: { translations },
    } = getState()
    const enPost = []
    const vnPost = []
    for (let i in warehouse) {
      enPost.push({ id: i, ...warehouse[i] })
      vnPost.push({ id: i, ...warehouse[i] })
    }
    const newTranslationData = {
      en: { ...translations.en, post: enPost },
      vn: { ...translations.vn, post: vnPost },
    }
    return { translations: newTranslationData }
  },
)

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
    },
  },
  extraReducers: (builder) =>
    void builder.addCase(
      loadInitialData.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export const { setLang } = slice.actions

export default slice.reducer
