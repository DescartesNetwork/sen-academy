import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Row, Col, Image, Button } from 'antd'
import { NavigationButton, NavigationMenu } from './navigation'
import Language from 'components/language'
import IonIcon from '@sentre/antd-ionicon'
import { setLanguage } from 'store/i18n.reducer'

import { setTheme } from 'store/ui.reducer'
import { AppDispatch, AppState } from 'store'
import logo from 'static/images/logo/logo.svg'
import logoDark from 'static/images/logo/logo-dark.svg'

import './index.less'

const Header = () => {
  const { language } = useSelector((state: AppState) => state.i18n)
  const { width, theme } = useSelector((state: AppState) => state.ui)
  const dispatch = useDispatch<AppDispatch>()
  const history = useHistory()

  const onChangeTheme = (theme: string) => {
    dispatch(setTheme(theme !== 'dark' ? 'dark' : 'light'))
  }

  const isMobile = width < 768
  const themeLogo = theme === 'dark' ? logoDark : logo
  const curLang = language

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
            <Button
              type="text"
              icon={<IonIcon name={theme === 'light' ? 'moon' : 'sunny'} />}
              onClick={() => onChangeTheme(theme)}
            />
          </Col>
          <Col>
            <Language
              value={curLang}
              onChange={(newLang) => dispatch(setLanguage(newLang))}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
