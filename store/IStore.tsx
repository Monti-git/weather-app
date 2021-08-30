import { ReactElement } from 'react';
import { createStore, AnyAction, Store } from 'redux';
import { ILocation, IWeather } from "libs/data";
import { IZone } from 'libs/data/zone';

export interface IDispatcher {
    (action: AnyAction): void
}
export type TActionArg = any
export interface IAction {
    (item?: TActionArg): (dispatch: IDispatcher) => any
}
export interface IHandler {
    [id: string]: IAction
}
export interface StoreState extends ModalState, LocationState, ZoneState, LoadingState {
}
export interface WeatherState {
    displayWeather: IWeather | null
    currentCity: number | null
}
export interface LoadingState {
    isLoading: boolean
}
export type TModal = "WEATHER" | null
export interface ModalState {
    modalContent: TModal
}

export type LocationState = {
    favoriteLocations: ILocation[]
    query: string
    searchList: ILocation[]
}
export type ZoneState = {
    favoriteZones: IZone[]
}