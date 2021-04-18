export type List = []
export type Loading = false
export type FishActionType =
  SetFishAction
  | ReqFishAction
  | ErrorFishAction

export type Dispatch = (action: FishActionType) => void;

export enum FishTypes {
  REQUEST_FISH = '@@fish/REQUEST_FISH',
  SET_FISH = '@@fish/SET_FISH',
  ERROR_FISH = '@@fish/ERROR_FISH',
  SET_LOADING = '@@fish/SET_LOADING'
}

export interface FistStateInterface {
  readonly list: List
  readonly loading: Loading
}

export interface SetFishAction {
  type: typeof FishTypes.SET_FISH;
  payload: FishItems[];
}

export interface ReqFishAction {
  type: typeof FishTypes.REQUEST_FISH;
}

export interface ErrorFishAction {
  type: typeof FishTypes.ERROR_FISH;
}

export interface FishItems {
  area_kota: string;
  area_provinsi: string;
  komoditas: string;
  price: string;
  size: string;
  tgl_parsed: string;
  timestamp: string;
  uuid: string;
}