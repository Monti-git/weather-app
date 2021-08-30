import { ILocation } from "libs/data";
import FavoriteHandler from "services/favorite";
import { IFavActions } from "services/favorite/IFavorite";
import { IAction, IHandler } from "store/IStore"

export interface LocationActions extends IFavActions {
    QUERY: string
    LIST : string
}
export const LocationActionTypes: LocationActions = {
    ADD: "Location_ADD",
    REMOVE: "Location_REMOVE",
    QUERY: "LOCATION_SET_QUERY",
    LIST : "LOCATION_SET_SEATCH_LIST"
}

export const { addToFavorite, removeFavorite } = FavoriteHandler(LocationActionTypes)

export const setQuery: IAction = (query: string) => (dispatch) => {
    dispatch({
        type: LocationActionTypes.QUERY,
        payload: query
    })
}

export const setResultList: IAction = (list : ILocation[]) => (dispatch) => {
    dispatch({
        type: LocationActionTypes.LIST,
        payload: list
    })
}