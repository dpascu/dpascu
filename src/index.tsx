import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from './store'
import * as serviceWorker from './serviceWorker'

const render = () => {
  const Terminal = require('./components/Terminal').default

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Terminal />
      </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/Terminal', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()