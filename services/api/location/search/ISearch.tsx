import { IAPIHandler, IAPIHook, swrResponse } from "../../IApi";
import { ILocation } from "libs/data";

export type TSearchLocationBuilder = string;
export interface ILocationHandler {
     (value: string) : void
}
export interface LocationSWRResponse extends swrResponse {
    data: ILocation[]
}
export interface ILookationHook extends LocationSWRResponse{
}
