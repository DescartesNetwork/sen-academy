import { Fragment, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Drawer, Popover, Space } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { HEADER_MENU } from 'constant'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

export const AboutUs = () => {
  const { system } = useSelector((state: AppState) => state.i18n)

  return (
    <Popover content={'Coming soon'} trigger="click">
      <Button type="text" icon={<IonIcon name="chevron-down" />} disabled>
        {system.menu.aboutUs}
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
  const { system } = useSelector((state: AppState) => state.i18n)
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
