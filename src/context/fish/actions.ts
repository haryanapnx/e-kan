/* eslint-disable @typescript-eslint/no-explicit-any */
import { FishTypes, Dispatch, PostFishParam } from './types';
import { message } from 'antd';
import { resources } from 'utils/api';
import { resetModal } from 'context/modal'
import { filterFishList } from 'utils/filterFishList';

export const getFishAction = async (dispatch: Dispatch): Promise<any> => {
  try {
    // post proccess
    dispatch({ type: FishTypes.REQUEST_FISH })
    const res = await resources.read('list')

    // set data to reducers
    dispatch({ type: FishTypes.SET_FISH, payload: filterFishList(res) });
  } catch (error) {
    dispatch({ type: FishTypes.ERROR_FISH })
    message.error(error?.response?.data);
  }
};

export const postFishAction = async (payload: PostFishParam, dispatch: Dispatch): Promise<any> => {
  try {
    // post proccess
    dispatch({ type: FishTypes.POST_REQUEST_FISH });
    await resources.append('list', [{ ...payload }]);

    // disable loading and close modal
    dispatch({ type: FishTypes.POST_FISH });
    resetModal(dispatch);

    // show message success and refetching list fish
    message.success('Data berhasil di simpan.');
    getFishAction(dispatch);
  } catch (err) {
    dispatch({ type: FishTypes.POST_ERROR_FISH });
    message.error(err?.response?.data);
  }
};

export const updateFishAction = async (uuid: any, payload: PostFishParam, dispatch: Dispatch): Promise<any> => {
  try {
    // update proccess
    dispatch({ type: FishTypes.POST_REQUEST_FISH });
    await resources.edit('list', {
      search: { uuid },
      set: payload,
    });

    // disable loading and close modal
    dispatch({ type: FishTypes.POST_FISH });
    resetModal(dispatch);

    // show message success and refetching list fish
    message.success('Data berhasil di update.');
    getFishAction(dispatch);
  } catch (err) {
    dispatch({ type: FishTypes.POST_ERROR_FISH });
    message.error(err?.response?.data);
  }
};


export const deleteFish = async (uuid: any, dispatch: Dispatch): Promise<any> => {
  try {
    // request delete
    dispatch({ type: FishTypes.DELETE_REQUEST_FISH });
    await resources.delete('list', { search: { uuid } });

    // reset modal
    resetModal(dispatch);

    // show message and disable loading
    message.success('Data berhasil di hapus.');
    dispatch({ type: FishTypes.DELETE_FISH });

    //refetch fish list
    dispatch(getFishAction(dispatch) as any);
  } catch (err) {
    dispatch({ type: FishTypes.DELETE_ERROR_FISH });
    message.error(err?.response?.data);
  }
};