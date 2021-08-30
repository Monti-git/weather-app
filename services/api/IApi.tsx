export interface swrResponse {
    data: any,
    isLoading: boolean,
    isError: any
}
export type APIBuilder = any;
export interface IAPICall {
    (builder: APIBuilder): swrResponse
}
export interface IAPIHook {
    handler: any
    & swrResponse
}

export interface IAPIHandler {
    (data: any | null): void
}

export interface ResultGetters {
    (response: Response): Promise<[Error | null, any]>
}