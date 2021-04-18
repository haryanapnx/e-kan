import { combineReducers } from 'libs/stores'
import { fishReducer } from './fish'

export const reducers = combineReducers({
  fish: fishReducer,
})