import { combineReducers } from 'libs/stores'
import { fishReducer } from './fish'
import { modalReducer } from './modal'

export const reducers = combineReducers({
  fish: fishReducer,
  modal: modalReducer
})