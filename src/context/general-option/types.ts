export type List = []
export type Loading = false
export type DefaultOption = [{ label: '', value: '' }]
export type OptionCity = { default: DefaultOption }


export type Dispatch = <T>(action: T) => void;

export enum GeneralTypes {
  REQUEST_SIZE = '@@general/REQUEST_SIZE',
  SET_SIZE = '@@general/SET_SIZE',
  ERROR_SIZE = '@@general/ERROR_SIZE',
  SET_LOADING = '@@general/SET_LOADING',

  REQUEST_AREA = '@@general/REQUEST_AREA',
  SET_AREA = '@@general/SET_AREA',
  ERROR_AREA = '@@general/ERROR_AREA',

}

export interface GeneralStateInterface {
  readonly area: List
  readonly size: List
  readonly optionProvince: DefaultOption
  readonly sizeOption: DefaultOption
  readonly optionCity: OptionCity
  readonly loading: Loading
}

export interface AreaItem {
  province: string
  city: string
}

export interface SizeItem {
  size: string
}