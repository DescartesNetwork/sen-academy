import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { enData } from './blogs-en'
import { vnData } from './blogs-vn'
import { enSystem } from './system-en'
import { vnSystem } from './system-vn'

const resources = {
  vn: {
    translation: {
      ...vnSystem,
      postsData: { ...vnData },
    },
  },
  en: {
    translation: {
      ...enSystem,
      postsData: { ...enData },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vn',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
