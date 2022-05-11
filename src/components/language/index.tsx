import { Image, Menu } from 'antd'
import { useSelector } from 'react-redux'

import { LanguageType } from 'constant'
import flagEn from 'static/images/system/flag-en.svg'
import flagVn from 'static/images/system/flag-vn.svg'

import { AppState } from 'store'

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
  const {
    i18n: { system },
  } = useSelector((state: AppState) => state)

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
          icon={
            <Image
              style={{ width: 32, marginRight: 8 }}
              src={flagVn}
              preview={false}
            />
          }
        >
          <span>{system.languages.vn}</span>
        </Menu.Item>
        <Menu.Item
          key="en"
          icon={
            <Image
              style={{ width: 32, marginRight: 8 }}
              src={flagEn}
              preview={false}
            />
          }
        >
          <span>{system.languages.en}</span>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default Language
