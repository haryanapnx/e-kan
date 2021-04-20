import { GeneralStateInterface, GeneralTypes, SizeItem } from './types';
import { optionTransformer } from 'utils/optionTransformer';

export const INITIAL_STATE: GeneralStateInterface = {
  area: [],
  size: [],
  sizeOption: [{ label: '', value: '' }],
  optionProvince: [{ label: '', value: '' }],
  optionCity: { default: [{ label: '', value: '' }] },
  loading: false
}

export const generalReducer = (
  state: GeneralStateInterface = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case GeneralTypes.SET_SIZE:
      const sizeTransform = action.payload.map(({ size }: SizeItem) => ({ label: size, value: size }))
      return {
        ...state,
        size: action.payload,
        sizeOption: sizeTransform,
        loading: false
      }
    case GeneralTypes.SET_AREA:
      const { optProvince, optCity } = optionTransformer(action.payload);
      return {
        ...state,
        area: action.payload,
        optionProvince: optProvince,
        optionCity: optCity,
        loading: false
      }
    case GeneralTypes.REQUEST_SIZE || GeneralTypes.REQUEST_AREA:
      return { ...state, loading: true }
    case GeneralTypes.ERROR_AREA || GeneralTypes.ERROR_SIZE:
      return { ...state, loading: false }
    default:
      return state
  }
}
