// Example for using discriminated union types.
type IsOpen = false
type Data = null
type Title = ''
type Name = ''
type Size = 1000
type Other = ''

export type ModalActionType = SetModal | ResetModal

export enum ModalTypes {
   MODAL_SHOW = '@@modal/MODAL_SHOW',
   MODAL_RESET = '@@modal/MODAL_RESET',
}

export enum ModalName {
   ADD_FISH = 'ADD_FISH',
}

export interface ModalState {
   readonly isOpen: IsOpen
   readonly data: Data
   readonly title: Title
   readonly name: Name
   readonly size: Size
   readonly other: Other
}

export interface ParamModal {
   isOpen?: boolean
   data?: Data
   title?: string
   name?: string
   size?: number | string
   other?: any
}

export interface SetModal {
   type: typeof ModalTypes.MODAL_SHOW;
   payload: ParamModal;
}
export interface ResetModal { type: typeof ModalTypes.MODAL_RESET }

export type Dispatch = (action: ModalActionType) => void;