import { combineReducers } from 'libs/stores'
import { fishReducer } from './fish'
import { modalReducer } from './modal'
import { generalReducer } from './general-option'

export const reducers = combineReducers({
  fish: fishReducer,
  modal: modalReducer,
  general: generalReducer,
})