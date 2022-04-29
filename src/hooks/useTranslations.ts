import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'store'
// import { setLangAsync } from "./i18nSlice";
type Test = {
  En: 'en'
  Vn: 'vn'
}
export default function useTranslations() {
  const dispatch = useDispatch()
  const lang = useSelector((state: AppState) => state.i18n.lang)
  const {
    i18n: {
      translations: { [lang]: t },
    },
  } = useSelector((state: AppState) => state)

  // const setLang = (lang) => dispatch(setLangAsync(lang));
  const supportedLangs = useSelector(
    (state: AppState) => state.i18n.supportedLangs,
  )
  // const status = useSelector((state: AppState) => state.i18n.status)
  return {
    t,
    lang,
    // setLang,
    // init: setLang,
    supportedLangs,
    // status,
  }
}
