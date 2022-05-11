import { Fragment, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Drawer, Popover, Space } from 'antd'
import IonIcon from 'components/ionicon'

import { HEADER_MENU } from 'constant'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

export const AboutUs = () => {
  const {
    i18n: { system },
  } = useSelector((state: AppState) => state)

  return (
    <Popover content={'Coming soon'} trigger="click">
      <Button type="text" disabled>
        <Space>
          <span>{system.menu.aboutUs}</span>
          <IonIcon name="chevron-down" />
        </Space>
      </Button>
    </Popover>
  )
}

export const NavigationButton = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Fragment>
      <Button
        type="text"
        icon={<IonIcon name="menu" />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        closeIcon={<IonIcon name="close" />}
      >
        <NavigationMenu direction="vertical" />
      </Drawer>
    </Fragment>
  )
}

export type NavigationMenuProps = {
  direction?: 'vertical' | 'horizontal'
}

export const NavigationMenu = ({
  direction = 'horizontal',
}: NavigationMenuProps) => {
  const {
    i18n: { system },
  } = useSelector((state: AppState) => state)
  const history = useHistory()

  const onNavigate = useCallback(
    (key: string) => {
      if (key === 'home') return history.push('/home')
      if (key === 'admin') return history.push('/publisher')
      return history.push(`/blogs?category=${key}`)
    },
    [history],
  )

  return (
    <Space direction={direction}>
      {HEADER_MENU.map((key) => (
        <Button type="text" onClick={() => onNavigate(key)} key={key}>
          {system.menu[key]}
        </Button>
      ))}
      <AboutUs />
    </Space>
  )
}
