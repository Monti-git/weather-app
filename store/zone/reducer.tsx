import { zoneActionTypes } from "./action"
import {Reducer} from 'redux';
import { ZoneState } from "store/IStore";

const InitialState : ZoneState = {
    favoriteZones : []
}

export const reducer: Reducer<ZoneState> = (state = InitialState, action) => {
    let currentFavZones = state.favoriteZones;
    switch (action.type) {
        case zoneActionTypes.ADD:
            currentFavZones.push(action.payload);
            return {
                ...state,
                favoriteZones: currentFavZones
            }
            break;
        case zoneActionTypes.REMOVE:
            currentFavZones = currentFavZones.filter(zone => zone.id != action.payload)
            return {
                ...state,
                favoriteZones: currentFavZones
            }
            break;
        default:
            return state
            break;
    }
}