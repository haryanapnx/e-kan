export type List = []
export type Loading = false
export type FishActionType =
  SetFishAction
  | ReqFishAction
  | ErrorFishAction
  | ReqPostFishAction
  | ReqDeleteFishAction
  | PostFishAction
  | DeleteFishAction
  | ErrorPostFishAction
  | ErrorDeleteFishAction

export type Dispatch = <T>(action: T) => void;

export enum FishTypes {
  REQUEST_FISH = '@@fish/REQUEST_FISH',
  SET_FISH = '@@fish/SET_FISH',
  ERROR_FISH = '@@fish/ERROR_FISH',
  SET_LOADING = '@@fish/SET_LOADING',

  POST_REQUEST_FISH = '@@fish/POST_REQUEST_FISH',
  POST_FISH = '@@fish/POST_FISH',
  SET_LOADING_POST = '@@fish/SET_LOADING_POST',
  POST_ERROR_FISH = '@@fish/POST_ERROR_FISH',

  DELETE_REQUEST_FISH = '@@fish/DELETE_REQUEST_FISH',
  DELETE_FISH = '@@fish/DELETE_FISH',
  SET_LOADING_DELETE = '@@fish/SET_LOADING_DELETE',
  DELETE_ERROR_FISH = '@@fish/POST_ERROR_FISH',
}

export interface FistStateInterface {
  readonly list: List
  readonly loading: Loading
  readonly loadingPost: Loading
  readonly loadingDelete: Loading
}

export interface SetFishAction {
  type: typeof FishTypes.SET_FISH;
  payload: FishItems[];
}

export interface ReqFishAction {
  type: typeof FishTypes.REQUEST_FISH;
}

export interface ReqPostFishAction {
  type: typeof FishTypes.POST_REQUEST_FISH;
}

export interface ReqDeleteFishAction {
  type: typeof FishTypes.DELETE_REQUEST_FISH;
}

export interface PostFishAction {
  type: typeof FishTypes.POST_FISH;
}

export interface DeleteFishAction {
  type: typeof FishTypes.DELETE_FISH;
}

export interface ErrorFishAction {
  type: typeof FishTypes.ERROR_FISH;
}
export interface ErrorPostFishAction {
  type: typeof FishTypes.POST_ERROR_FISH;
}

export interface ErrorDeleteFishAction {
  type: typeof FishTypes.DELETE_ERROR_FISH;
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

export interface PostFishParam {
  uuid?: string;
  komoditas: string | undefined;
  area_provinsi?: string;
  area_kota?: string;
  size?: string;
  price: number | string;
  tgl_parsed: string;
  timestamp: number;
}