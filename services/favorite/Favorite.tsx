import { IDispatcher, IAction } from "store/IStore";
import { ActionCreator } from "redux";
import { IFavActions, IFavoriteHandler } from "./IFavorite";

const FavoriteHandler = (builder: IFavActions): IFavoriteHandler => {

    const addToFavorite: ActionCreator<any> = (item) => (dispatch: IDispatcher) => {
        console.log("adding tofav")
        return dispatch({
            type: builder.ADD,
            payload: item
        })
    }

    const removeFavorite: ActionCreator<any> = (id) => (dispatch: IDispatcher) => {
        console.log("removing from fav")

        return dispatch({
            type: builder.REMOVE,
            payload: id
        })
    }

    return {
        addToFavorite,
        removeFavorite,
    }
}

export default FavoriteHandler;