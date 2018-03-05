import { combineReducers } from 'redux'
import { counterApp } from './counterReducers'

export default combineReducers({
  counter: counterApp
})
