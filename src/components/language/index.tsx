import { Image, Menu } from 'antd'
import useTranslations from 'hooks/useTranslations'

import { LanguageType } from 'constant'
import flagEn from 'static/images/system/flag-en.svg'
import flagVn from 'static/images/system/flag-vn.svg'
import './index.less'

const ICON_LANG = {
  en: { label: 'En', icon: flagEn },
  vn: { label: 'Vi', icon: flagVn },
}

export type LanguageProps = {
  value?: LanguageType
  onChange: (value: LanguageType) => void
}

const Language = ({ value = 'en', onChange = () => {} }: LanguageProps) => {
  const { t } = useTranslations()

  return (
    <Menu
      className="language-menu"
      selectedKeys={[value]}
      onClick={(e) => onChange(e.key as LanguageType)}
      triggerSubMenuAction="click"
    >
      <Menu.SubMenu
        key="language"
        icon={<Image src={ICON_LANG[value].icon} preview={false} />}
      >
        <Menu.Item
          key="vn"
          icon={<Image style={{ width: 32 }} src={flagVn} preview={false} />}
          style={{ marginRight: 8 }}
        >
          <span>{t.system.languages.vn}</span>
        </Menu.Item>
        <Menu.Item
          key="en"
          icon={<Image style={{ width: 32 }} src={flagEn} preview={false} />}
          style={{ marginRight: 8 }}
        >
          <span>{t.system.languages.en}</span>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default Language
