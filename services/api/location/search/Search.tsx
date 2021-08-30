import useSWR from "swr";
import { ILocation } from "libs/data";
import { ILookationHook, ILocationHandler } from "./ISearch";
import fetcher from "libs/fetcher";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { setResultList } from "store/location/action";
import { startLoading, finishLoading } from "store/UI";

const useSearchLocation = (): ILookationHook => {

    const query = useAppSelector((state) => state.location.query)
    const dispatch = useAppDispatch();

    const searchParams = new URLSearchParams({ "search": query });
    const { data, error } = useSWR<ILocation[]>("/api/location?" + searchParams.toString(), fetcher);

    useEffect(() => {
        if(data){
            setResultList(data)(dispatch)
        }
    }, [data, error])

    return {
        isLoading: !error && !data,
        data: data ?? [],
        isError: error,
    }
}
export default useSearchLocation
