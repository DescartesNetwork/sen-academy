import { useSelector } from 'react-redux'
import { AppState } from 'store'

const useTranslations = () => {
  const {
    i18n: {
      lang,
      translations: { [lang]: t },
      supportedLangs,
    },
  } = useSelector((state: AppState) => state)
  return {
    t,
    lang,
    supportedLangs,
  }
}

export default useTranslations
