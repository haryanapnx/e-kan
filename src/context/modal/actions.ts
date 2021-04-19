import { ModalTypes, ParamModal, Dispatch } from './types';

export const showModal = ({
   isOpen = false,
   data = null,
   title = "",
   name = "",
   size = 1000,
   other = "",
}: ParamModal,
   dispatch: Dispatch
): void => {
   dispatch({
      type: ModalTypes.MODAL_SHOW,
      payload: { isOpen, data, title, name, size, other },
   });
};

export const resetModal = (dispatch: Dispatch) => {
   dispatch({ type: ModalTypes.MODAL_RESET });
};
