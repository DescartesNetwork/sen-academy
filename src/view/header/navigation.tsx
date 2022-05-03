import { Fragment, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Drawer, Popover, Space } from 'antd'
import IonIcon from 'components/ionicon'

import { HEADER_MENU } from 'constant'
import useTranslations from 'hooks/useTranslations'

export const AboutUs = () => {
  const { t } = useTranslations()
  if (!t) return null

  return (
    <Popover content={'Coming soon'} trigger="click">
      <Button type="text" disabled>
        <Space>
          <span>{t.system.menu.aboutUs}</span>
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
  const history = useHistory()
  const { t } = useTranslations()

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
          {t.system?.menu[key]}
        </Button>
      ))}
      <AboutUs />
    </Space>
  )
}
