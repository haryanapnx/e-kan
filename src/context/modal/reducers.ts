import { ModalState, ModalTypes, ModalActionType } from './types'

// Type-safe initialState!
export const INITIAL_STATE: ModalState = {
   isOpen: false,
   data: null,
   title: '',
   name: '',
   size: 1000,
   other: '',
}

export const modalReducer = (
   state: ModalState = INITIAL_STATE,
   action: ModalActionType
) => {
   switch (action.type) {
      case ModalTypes.MODAL_SHOW: {
         return {
            ...state,
            ...action.payload
         };
      }
      case ModalTypes.MODAL_RESET: {
         return {
            ...state,
            isOpen: false,
            data: null,
            title: '',
            name: '',
            size: 1000,
            other: '',
         };
      }
      default: {
         return state
      }
   }
}
