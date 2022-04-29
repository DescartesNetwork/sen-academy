import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { enData } from './blogs-en'
import { vnData } from './blogs-vn'
import { enSystem } from './system-en'
import { vnSystem } from './system-vn'

export const defaultLang = 'en'

export const supportedLangs = {
  en: 'English',
  vn: 'VietNam',
}

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

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: 'vn',
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//   })
