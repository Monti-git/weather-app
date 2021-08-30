import { LoadingState, ModalState } from "store/IStore";
import { Reducer } from 'redux';
import { UIActionTypes } from "./action";

const InitialState: LoadingState & ModalState = {
    isLoading: false,
    modalContent: null
}

export const reducer: Reducer<LoadingState & ModalState> = (state = InitialState, action) => {
    switch (action.type) {
        case UIActionTypes.SET_MODAL:
            return {
                ...state,
                modalContent: action.payload
            };
        case UIActionTypes.FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case UIActionTypes.START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state
    }
}