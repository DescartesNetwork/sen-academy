import { Fragment, useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Col, Image, Row, Menu, Space, Button } from 'antd'
import { HEADER_MENU, SubMenu } from 'constant'
import IonIcon from 'components/ionicon'

import { useUI } from 'providerd'

import logo from 'static/images/logo/logo.svg'
import { coreData } from 'static/base/core'
import iconMoon from 'static/images/system/moon.svg'
import flagEn from 'static/images/system/flag-en.svg'
import flagVn from 'static/images/system/flag-vn.svg'

import './index.less'

const { menu } = coreData

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [isVnLang, setIsVnLang] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('home')
  const history = useHistory()
  const {
    ui: { width },
  } = useUI()
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const query = useMemo(() => new URLSearchParams(location.search), [location])
  const blogCat = query.get('category') || ''

  const onHandleLanguage = () => {
    const condition = !isVnLang
    setIsVnLang(condition)
    if (condition) return i18n.changeLanguage('en')
    return i18n.changeLanguage('vn')
  }

  const onHandleMenu = (key: string) => {
    setSelectedMenu(key)
    setVisible(false)
    if (key === 'home') return history.push(key)
    return history.push(`/blogs?category=${key}`)
  }

  const isMobile = width < 768
  const iconFlag = !isVnLang ? flagEn : flagVn

  useEffect(() => {
    if (blogCat) return setSelectedMenu(blogCat)
    return setSelectedMenu('home')
  }, [blogCat])

  return (
    <Row justify="center">
      <Col span={24} className="container">
        <Row gutter={[16, 16]} justify="space-between">
          <Col flex="auto" className="logo">
            <Space align="center" style={{ height: '100%' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={logo}
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
                          disabled={key === 'user'}
                        >
                          {t(`menu.${key}`, { returnObjects: true })}
                        </Menu.Item>
                      )

                    // Render sub menu if is existed
                    const data: SubMenu[] = menu[key]
                    return (
                      <Fragment key={key}>
                        {data.map((item, idx) => (
                          <Menu.SubMenu
                            key={`subMenu-${idx}`}
                            title={t(`menu.${key}.${idx}.label`, {
                              returnObjects: true,
                            })}
                            disabled
                          >
                            {item.data.map((subMenu) => (
                              <Menu.Item key={subMenu} style={{ fontSize: 16 }}>
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
            <Space>
              <Button
                type="text"
                size="small"
                icon={<Image src={iconMoon} preview={false} />}
                disabled
              />
              <Button
                type="text"
                size="small"
                icon={<Image src={iconFlag} preview={false} />}
                onClick={onHandleLanguage}
              />
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
