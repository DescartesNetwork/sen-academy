import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { Affix, Card, Layout } from 'antd'
import Header from './header'
import Home from './home'
import Footer from './footer'
import Blogs from './blogs'
import Details from './blogs/details'
import Watcher from './watcher'

import { AppState } from 'store'
import 'static/base/multilangData'

const App = () => {
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state)
  const { t } = useTranslation()

  // Load theme
  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])

  return (
    <Layout className="root-bg">
      {/* Translate site description */}
      <Helmet>
        <title>{t('siteDesc', { returnObjects: true })}</title>
      </Helmet>
      <Affix>
        <Card
          className="glass"
          style={{
            borderRadius: '0 0 16px 16px',
            boxShadow: 'unset',
            zIndex: 999,
          }}
          bodyStyle={{ padding: 16 }}
          bordered={false}
        >
          <Header />
        </Card>
      </Affix>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:postId" component={Details} />
          <Redirect exact from="*" to="/home" />
        </Switch>
      </Layout>
      <Layout>
        <Footer />
      </Layout>
      <Watcher />
    </Layout>
  )
}

export default App