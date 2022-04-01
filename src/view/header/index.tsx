import { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Col, Image, Row, Menu, Space, Button } from 'antd'
import { HEADER_MENU, SubMenu } from 'constant'

import logo from 'static/images/logo/logo.svg'
import { coreData } from 'static/base/core'
import iconMoon from 'static/images/system/moon.svg'
import iconFlag from 'static/images/system/flag.svg'

import './index.less'

const { menu } = coreData

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState('home')
  const history = useHistory()

  const onHandleMenu = (key: string) => {
    setSelectedMenu(key)
    if (key === 'home') return history.push(key)
    history.push(`/blogs?category=${key}`)
  }

  return (
    <Row justify="center">
      <Col span={24} className="container">
        <Row gutter={[16, 16]} justify="space-between">
          <Col flex="auto" className="logo">
            <Image
              style={{ cursor: 'pointer' }}
              src={logo}
              onClick={() => history.push('/home')}
              preview={false}
            />
          </Col>
          <Col flex="auto">
            <Menu
              selectedKeys={[selectedMenu]}
              onClick={(e) => onHandleMenu(e.key)}
              mode="horizontal"
              className="header-menu"
            >
              {HEADER_MENU.map((key) => {
                if (key !== 'subMenu' || !Array.isArray(menu[key]))
                  return (
                    <Menu.Item key={key} style={{ fontSize: 16 }}>
                      {menu[key]}
                    </Menu.Item>
                  )

                // Render sub menu if is existed
                const data: SubMenu[] = menu[key]
                return (
                  <Fragment key={key}>
                    {data.map((item, idx) => (
                      <Menu.SubMenu
                        key={`subMenu-${idx}`}
                        title={item.label}
                        disabled
                      >
                        {item.data.map((subMenu) => (
                          <Menu.Item key={subMenu} style={{ fontSize: 16 }}>
                            {subMenu}
                          </Menu.Item>
                        ))}
                      </Menu.SubMenu>
                    ))}
                  </Fragment>
                )
              })}
            </Menu>
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
                disabled
              />
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
