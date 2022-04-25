import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Col, Image, Row, Button, Space } from 'antd'
import { NavigationButton, NavigationMenu } from './navigation'
import Language from '../../components/language'
import IonIcon from 'components/ionicon'

import { LanguageType } from 'constant'
import { useUI } from 'providerd'
import { setTheme } from 'store/ui.reducer'
import { AppDispatch } from 'store'

import logo from 'static/images/logo/logo.svg'
import logoDark from 'static/images/logo/logo-dark.svg'
import './index.less'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const history = useHistory()
  const {
    ui: { width, theme },
  } = useUI()
  const { i18n } = useTranslation()

  const onChangeTheme = (theme: string) => {
    dispatch(setTheme(theme !== 'dark' ? 'dark' : 'light'))
  }

  const isMobile = width < 768
  const themeLogo = theme === 'dark' ? logoDark : logo
  const curLang = i18n.language as LanguageType

  return (
    <Row justify="center">
      <Col span={24} className="container">
        <Row gutter={[16, 16]} align="middle">
          <Col flex="auto" className="logo">
            <Image
              style={{ cursor: 'pointer' }}
              src={themeLogo}
              onClick={() => history.push('/home')}
              preview={false}
            />
          </Col>
          <Col flex={isMobile ? undefined : 'auto'}>
            {isMobile ? <NavigationButton /> : <NavigationMenu />}
          </Col>
          <Col>
            <Space>
              <Button
                type="text"
                icon={<IonIcon name="create" />}
                onClick={() => history.push('/publisher')}
              />
              <Button
                type="text"
                icon={<IonIcon name={theme === 'light' ? 'moon' : 'sunny'} />}
                onClick={() => onChangeTheme(theme)}
              />
            </Space>
          </Col>
          <Col>
            <Language value={curLang} onChange={i18n.changeLanguage} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
