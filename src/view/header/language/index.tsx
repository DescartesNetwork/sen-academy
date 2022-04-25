import { useTranslation } from 'react-i18next'

import { Image, Menu } from 'antd'

import { LanguageType } from 'constant'
import flagEn from 'static/images/system/flag-en.svg'
import flagVn from 'static/images/system/flag-vn.svg'
import './index.less'

const ICON_LANG = {
  en: { label: 'En', icon: flagEn },
  vn: { label: 'Vi', icon: flagVn },
}

const Language = () => {
  const { t, i18n } = useTranslation()

  const onHandleLanguage = (key: string) => {
    return i18n.changeLanguage(key)
  }

  const curLang = i18n.language

  return (
    <Menu
      className="language-menu"
      selectedKeys={[curLang]}
      onClick={(e) => onHandleLanguage(e.key)}
      triggerSubMenuAction="click"
    >
      <Menu.SubMenu
        key="language"
        icon={
          <Image
            src={ICON_LANG[curLang as LanguageType].icon}
            preview={false}
          />
        }
      >
        <Menu.Item
          key="vn"
          icon={<Image style={{ width: 32 }} src={flagVn} preview={false} />}
          style={{ marginRight: 8 }}
        >
          <span>{t('languages.vn', { returnObjects: true })}</span>
        </Menu.Item>
        <Menu.Item
          key="en"
          icon={<Image style={{ width: 32 }} src={flagEn} preview={false} />}
          style={{ marginRight: 8 }}
        >
          <span>{t('languages.en', { returnObjects: true })}</span>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default Language
