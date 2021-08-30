import { IAction, IDispatcher, IHandler } from "store/IStore";

export interface IFavoriteHandler extends IHandler{
    addToFavorite : IAction
    removeFavorite : IAction
}

export interface IFavActions {
    ADD : string
    REMOVE : string
}

