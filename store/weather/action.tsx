import { IWeather } from "libs/data";
import FavoriteHandler from "services/favorite";
import { IAction, IHandler } from "store/IStore"

export interface IWeatherActions {
    SET_CITY: string,
    LOAD_WEATHER: string,
}

export const WeatherActionTypes: IWeatherActions = {
    SET_CITY: "WEATHER_PICK_CITY",
    LOAD_WEATHER: "WEATHER_SET_BODY"
}

export const setCity: IAction = (id: number) => (dispatch) => {
    dispatch({
        type: WeatherActionTypes.SET_CITY,
        payload: id
    })
}

export const loadWeather: IAction = (weather: IWeather) => (dispatch) => {
    dispatch({
        type: WeatherActionTypes.LOAD_WEATHER,
        payload: weather
    })
}
