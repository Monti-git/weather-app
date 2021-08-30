import useSWR from "swr";
import fetcher from "libs/fetcher";
import { IWeather } from "libs/data";
import { ISearchWeatherHook, ISearchWeatherHandler } from "./IWeather";
import { startLoading, finishLoading } from "store/UI";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { loadWeather } from "store/weather/action";

const useSearchWeather = (): ISearchWeatherHook => {

    const city = useAppSelector((state) => state.weather.currentCity)
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("miau")
    }, [])

    const url = `/api/weather/` + city;
    const { data, error } = useSWR<IWeather>(typeof city != "number" ? null : url.toString(), fetcher);
    useEffect(() => {
        if (data) {
            loadWeather(data)(dispatch);
        }
    }, [data, error])
    return {
        isError: error,
        isLoading: !error && !data && typeof city == "number",
        data: data!,
    }
}
export default useSearchWeather