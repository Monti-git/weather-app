import { LocationState, StoreState, WeatherState } from "store/IStore";
import { Reducer } from 'redux';
import { jsonNewReference } from "libs/utils/json";
import { WeatherActionTypes } from './action'

const InitialState: WeatherState = {
    currentCity: null,
    displayWeather: null
}

export const reducer: Reducer<WeatherState> = (state = InitialState, action) => {
    switch (action.type) {
        case WeatherActionTypes.SET_CITY:
            return {
                ...state,
                currentCity: action.payload
            }
            break;
        case WeatherActionTypes.LOAD_WEATHER:
            return {
                ...state,
                displayWeather: action.payload
            }
            break;
        default:
            return state
            break;
    }
}