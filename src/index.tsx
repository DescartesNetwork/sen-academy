import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import App from './view'

import reportWebVitals from './reportWebVitals'
import store from 'store'

import 'static/styles/light.less'
import 'static/styles/dark.less'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ConfigProvider prefixCls={'sen-academy'}>
        <App />
      </ConfigProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
