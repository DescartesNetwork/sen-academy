import { useSelector } from 'react-redux'
import { AppState } from 'store'

export default function useTranslations() {
  const lang = useSelector((state: AppState) => state.i18n.lang)
  const {
    i18n: {
      translations: { [lang]: t },
    },
  } = useSelector((state: AppState) => state)
  const supportedLangs = useSelector(
    (state: AppState) => state.i18n.supportedLangs,
  )
  return {
    t,
    lang,
    supportedLangs,
  }
}
