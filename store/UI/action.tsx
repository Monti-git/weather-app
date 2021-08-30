import { IAction, IHandler, TModal, IDispatcher } from "store/IStore"

export interface IUIActions {
    START_LOADING: string,
    FINISH_LOADING: string,
    SET_MODAL: string
}


export type UIActionTypes = "UI_ADD" | "UI_REMOVE"
export const UIActionTypes: IUIActions = {
    START_LOADING: "UI_START_LOADING",
    FINISH_LOADING: "UI_FINISH_LOADING",
    SET_MODAL: "MODAL_SET_MODAL"
}

export const startLoading: IAction = () => (dispatch) => {
    dispatch({
        type: UIActionTypes.START_LOADING,
    })
}
export const finishLoading: IAction = () => (dispatch) => {
    dispatch({
        type: UIActionTypes.FINISH_LOADING,
    })
}

export interface IModalAction {
    (item: TModal): (dispatch: IDispatcher) => any
}
export const setModal: IModalAction = (modal: TModal) => (dispatch) => {
    dispatch({
        type: UIActionTypes.SET_MODAL,
        payload: modal
    })
}