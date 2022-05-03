import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Row, Col, Affix, Card, Layout } from 'antd'
import Header from './header'
import Home from './home'
import Footer from './footer'
import Blogs from './blogs'
import Details from './blogs/details'
import Publisher from './publisher'
import Markdown from './markdown'
import Watcher from './watcher'

import { AppDispatch, AppState } from 'store'
import { loadWarehouse } from 'store/warehouse.reducer'
import 'static/base/multilangData'
import { loadInitialData } from 'store/i18n.reducer'
import useTranslations from 'hooks/useTranslations'
//import { useMulilangData } from 'static/base/multilangData'

const App = () => {
  const {
    ui: { theme },
    warehouse,
  } = useSelector((state: AppState) => state)
  const dispatch = useDispatch<AppDispatch>()
  const { t } = useTranslations()

  useEffect(() => {
    dispatch(loadWarehouse())
  }, [dispatch])

  useEffect(() => {
    dispatch(loadInitialData())
  }, [dispatch, warehouse])

  // Load theme
  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])

  return (
    <Layout className="root-bg">
      {/* Translate site description */}
      <Helmet>
        <title>{t.siteDesc}</title>
      </Helmet>
      <Affix>
        <Card
          className="glass"
          style={{
            borderRadius: '0 0 16px 16px',
            boxShadow: 'unset',
          }}
          bodyStyle={{ padding: 16 }}
          bordered={false}
        >
          <Header />
        </Card>
      </Affix>
      <Layout style={{ padding: '24px 12px 0px 12px' }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/blogs/:postId" component={Details} />
              <Route exact path="/publisher" component={Publisher} />
              <Route exact path="/edit/:postId" component={Markdown} />
              <Redirect exact from="*" to="/home" />
            </Switch>
          </Col>
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      </Layout>
      <Watcher />
    </Layout>
  )
}

export default App
