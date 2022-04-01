import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Affix, Card, Layout } from 'antd'
import Header from './header'
import Home from './home'
import Footer from './footer'
import Blogs from './blogs'

import { AppState } from 'store'

const App = () => {
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state)
  // Load theme

  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])
  return (
    <Layout className="root-bg">
      <Affix>
        <Card
          className="glass"
          style={{
            borderRadius: '0 0 16px 16px',
            boxShadow: 'unset',
            zIndex: 999,
          }}
          bodyStyle={{ padding: 8 }}
          bordered={false}
        >
          <Header />
        </Card>
      </Affix>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Redirect exact from="*" to="/home" />
        </Switch>
      </Layout>
      <Layout>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default App
