import { SWRResponse } from "swr";
import { swrResponse } from "../IApi";
import { IWeather } from "libs/data";

export type TSearchWeatherBuilder = number | boolean;
export interface ISearchWeatherHandler{
    (woeid : number) : void
}
export interface ISearchWeatherResponse extends swrResponse {
    data: IWeather | null
}

export interface ISearchWeatherHook extends ISearchWeatherResponse{
}