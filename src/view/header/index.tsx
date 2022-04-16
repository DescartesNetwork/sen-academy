import { Fragment, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Col, Image, Row, Menu, Space, Button, Typography } from 'antd'
import { HEADER_MENU, LanguageType, SubMenu } from 'constant'
import IonIcon from 'components/ionicon'

import { useUI } from 'providerd'
import { setTheme } from 'store/ui.reducer'
import { AppDispatch } from 'store'

import logo from 'static/images/logo/logo.svg'
import logoDark from 'static/images/logo/logo-dark.svg'
import iconMoon from 'static/images/system/moon.svg'
import iconSun from 'static/images/system/sun.svg'
import flagEn from 'static/images/system/flag-en.svg'
import flagVn from 'static/images/system/flag-vn.svg'

import './index.less'

const ICON_LANG = {
  en: { label: 'En', icon: flagEn },
  vn: { label: 'Vi', icon: flagVn },
}

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('home')
  const dispatch = useDispatch<AppDispatch>()
  const history = useHistory()
  const {
    ui: { width, theme },
  } = useUI()
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const query = useMemo(() => new URLSearchParams(location.search), [location])
  const blogCat = query.get('category') || ''

  const onHandleLanguage = (key: string) => {
    return i18n.changeLanguage(key)
  }

  const onHandleMenu = (key: string) => {
    setSelectedMenu(key)
    setVisible(false)
    if (key === 'home') return history.push(`/${key}`)
    return history.push(`/blogs?category=${key}`)
  }

  const onChangeTheme = (theme: string) => {
    dispatch(setTheme(theme !== 'dark' ? 'dark' : 'light'))
  }

  useEffect(() => {
    if (blogCat) return setSelectedMenu(blogCat)
    return setSelectedMenu('home')
  }, [blogCat])

  const isMobile = width < 768
  const curLang = i18n.language
  const themeIcon = theme === 'dark' ? iconSun : iconMoon
  const themeLogo = theme === 'dark' ? logoDark : logo

  return (
    <Row justify="center">
      <Col span={24} className="container">
        <Row gutter={[16, 16]} justify="space-between">
          <Col flex="auto" className="logo">
            <Space align="center" style={{ height: '100%' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={themeLogo}
                onClick={() => history.push('/home')}
                preview={false}
              />
            </Space>
          </Col>
          <Col flex={!isMobile ? 'auto' : undefined}>
            <Space align="center" style={{ height: '100%' }}>
              <Space
                className={`${isMobile && 'menu-mobile'} ${
                  visible && 'active'
                }`}
                align="start"
              >
                <Menu
                  selectedKeys={[selectedMenu]}
                  onClick={(e) => onHandleMenu(e.key)}
                  mode={isMobile ? 'vertical' : 'horizontal'}
                  className="header-menu"
                >
                  {HEADER_MENU.map((key) => {
                    if (key !== 'subMenu')
                      return (
                        <Menu.Item
                          key={key}
                          style={{ fontSize: 16 }}
                        >
                          {t(`menu.${key}`, { returnObjects: true })}
                        </Menu.Item>
                      )

                    // Render sub menu if is existed
                    const data: SubMenu[] = t(`menu.${key}`, {
                      returnObjects: true,
                    })
                    return (
                      <Fragment key={key}>
                        {data.map((item, idx) => (
                          <Menu.SubMenu
                            key={`subMenu-${idx}`}
                            style={{ fontSize: 16 }}
                            title={t(`menu.${key}.${idx}.label`, {
                              returnObjects: true,
                            })}
                            disabled
                          >
                            {item.data.map((subMenu) => (
                              <Menu.Item key={subMenu}>
                                {t(`menu.${key}.${subMenu}`, {
                                  returnObjects: true,
                                })}
                              </Menu.Item>
                            ))}
                          </Menu.SubMenu>
                        ))}
                      </Fragment>
                    )
                  })}
                </Menu>
                {isMobile && (
                  <Button
                    type="text"
                    style={{ position: 'absolute', right: 15, top: 8 }}
                    icon={<IonIcon name="close-outline" />}
                    onClick={() => setVisible(false)}
                  />
                )}
              </Space>
              {isMobile && (
                <Space>
                  <Button
                    type="text"
                    icon={<IonIcon name="share-social-outline" />}
                    onClick={() => setVisible(true)}
                  />
                </Space>
              )}
            </Space>
          </Col>
          <Col>
            <Space align="center">
              <Button
                type="text"
                size="small"
                icon={<Image src={themeIcon} preview={false} />}
                onClick={() => onChangeTheme(theme)}
              />
              <Menu
                className="language-menu"
                selectedKeys={[curLang]}
                onClick={(e) => onHandleLanguage(e.key)}
              >
                <Menu.SubMenu
                  key="language"
                  icon={
                    <Space align="center">
                      <Image
                        src={ICON_LANG[curLang as LanguageType].icon}
                        preview={false}
                      />
                      <Typography.Text>
                        {ICON_LANG[curLang as LanguageType].label}
                      </Typography.Text>
                    </Space>
                  }
                >
                  <Menu.Item
                    key="vn"
                    icon={
                      <Image
                        style={{ width: 32 }}
                        src={flagVn}
                        preview={false}
                      />
                    }
                    style={{ marginRight: 8 }}
                  >
                    <span>{t('languages.vn', { returnObjects: true })}</span>
                  </Menu.Item>
                  <Menu.Item
                    key="en"
                    icon={
                      <Image
                        style={{ width: 32 }}
                        src={flagEn}
                        preview={false}
                      />
                    }
                    style={{ marginRight: 8 }}
                  >
                    <span>{t('languages.en', { returnObjects: true })}</span>
                  </Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
