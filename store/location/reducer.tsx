import { LocationState, StoreState } from "store/IStore";
import { LocationActionTypes } from "./action"
import { Reducer } from 'redux';
import { jsonNewReference } from "libs/utils/json";

const InitialState: LocationState = {
    favoriteLocations: [],
    query: '',
    searchList : []
}

export const reducer: Reducer<LocationState> = (state = InitialState, action) => {
    let currentFavLocations = state.favoriteLocations;
    switch (action.type) {
        case LocationActionTypes.ADD:
            currentFavLocations.push(action.payload);
            return {
                ...state,
                favoriteLocations: jsonNewReference(currentFavLocations)
            }
            break;
        case LocationActionTypes.REMOVE:
            currentFavLocations = currentFavLocations.filter(Location => Location.woeid != action.payload)
            return {
                ...state,
                favoriteLocations: jsonNewReference(currentFavLocations)
            }
            break;
        case LocationActionTypes.QUERY:
            return {
                ...state,
                query: action.payload
            }
            break;
        case LocationActionTypes.LIST:
            return {
                ...state,
                searchList : action.payload
            }
        default:
            return state
            break;
    }
}