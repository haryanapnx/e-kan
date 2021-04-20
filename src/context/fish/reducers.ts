import { FistStateInterface, FishTypes, FishActionType } from './types';

export const INITIAL_STATE: FistStateInterface = {
  list: [],
  loading: false,
  loadingPost: false,
  loadingDelete: false,
}

export const fishReducer = (
  state: FistStateInterface = INITIAL_STATE,
  action: FishActionType
) => {
  switch (action.type) {
    case FishTypes.REQUEST_FISH:
      return { ...state, loading: true }
    case FishTypes.SET_FISH:
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    case FishTypes.ERROR_FISH:
      return { ...state, loading: false }
    case FishTypes.POST_REQUEST_FISH:
      return { ...state, loadingPost: true }
    case FishTypes.POST_FISH || FishTypes.POST_ERROR_FISH:
      return { ...state, loadingPost: false }
    case FishTypes.DELETE_REQUEST_FISH:
      return { ...state, loadingDelete: true }
    case FishTypes.DELETE_FISH || FishTypes.DELETE_ERROR_FISH:
      return { ...state, loadingDelete: false }
    default:
      return state
  }
}
