/* eslint-disable @typescript-eslint/no-explicit-any */
import { FishTypes, Dispatch, FishItems } from './types';
import { resources } from 'utils/api';
import { filterFishList } from 'utils/filterFishList';

export const getFishAction = async (dispatch: Dispatch): Promise<any> => {
  try {
    dispatch({ type: FishTypes.REQUEST_FISH })
    const res = await resources.read('list')
    dispatch({ type: FishTypes.SET_FISH, payload: filterFishList(res) });
  } catch (error) {
    dispatch({ type: FishTypes.ERROR_FISH })
    console.error(error?.response?.data)
  }
};
