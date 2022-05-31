import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import App from './view'
import { UIProvider } from 'providers'

import reportWebVitals from './reportWebVitals'
import store from 'store'

import 'static/styles/light.less'
import 'static/styles/dark.less'

ReactDOM.render(
  <Provider store={store}>
    <UIProvider antd>
      <HashRouter>
        <ConfigProvider prefixCls={'sen-academy'}>
          <App />
        </ConfigProvider>
      </HashRouter>
    </UIProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
