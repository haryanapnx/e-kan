/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeneralTypes, Dispatch} from './types';
import { resources } from 'utils/api';

export const getSizeAction = async (dispatch: Dispatch): Promise<any> => {
  try {
    dispatch({ type: GeneralTypes.REQUEST_SIZE })
    const res = await resources.read('option_size')
    dispatch({ type: GeneralTypes.SET_SIZE, payload: res });
  } catch (error) {
    dispatch({ type: GeneralTypes.ERROR_SIZE })
    console.error(error?.response?.data)
  }
};


export const getAreaAction = async (dispatch: Dispatch): Promise<any> => {
  try {
    dispatch({ type: GeneralTypes.REQUEST_AREA })
    const res = await resources.read('option_area')
    dispatch({ type: GeneralTypes.SET_AREA, payload: res });
  } catch (error) {
    dispatch({ type: GeneralTypes.ERROR_AREA })
    console.error(error?.response?.data)
  }
};
