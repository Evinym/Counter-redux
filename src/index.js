import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reducer from './reducers/index'
import logger from 'redux-logger'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const middleware = applyMiddleware(logger)

const store = createStore(reducer, middleware)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
