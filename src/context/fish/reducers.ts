import { FistStateInterface, FishTypes, FishActionType } from './types';

export const INITIAL_STATE: FistStateInterface = {
  list: [],
  loading: false
}

export const fishReducer = (
  state: FistStateInterface = INITIAL_STATE,
  action: FishActionType
) => {
  switch (action.type) {
    case FishTypes.REQUEST_FISH:
      return { ...state, loading: true }
    case FishTypes.SET_FISH:
      return { ...state, list: action.payload, loading: false }
    case FishTypes.ERROR_FISH:
      return { ...state, loading: false }
    default:
      return state
  }
}
