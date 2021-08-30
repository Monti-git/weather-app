import { ILocation } from "libs/data";
import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { addToFavorite, removeFavorite } from "store/location/action";
import { setModal } from "store/UI";
import { setCity } from "store/weather/action";

import { StarOutlined, StarFilled, InfoCircleTwoTone } from "@ant-design/icons";
import cn from 'classnames';
import s from './City.module.css';

const City = (data: ILocation) => {
    const favList = useAppSelector((state) => state.location.favoriteLocations)
    const dispatch = useAppDispatch();

    const [isFav, setIsFav] = useState<boolean>(false);
    useEffect(() => {
        setIsFav(favList.find(location => location.woeid == data.woeid) != undefined)
    }, [favList])

    const loadCityWeather = () => {
        setCity(data.woeid)(dispatch);
        setModal("WEATHER")(dispatch);
    }

    const handleFavorite = () => {
        isFav ? removeFavorite(data.woeid)(dispatch) : addToFavorite(data)(dispatch);
    }
    return <div
        className={cn(s.root)}
        key={data.woeid}
    >
        <span>
            {data.title}
        </span>
        <div>
            <button
                onClick={handleFavorite}
            >
                {
                    !isFav ? <StarOutlined /> : <StarFilled />
                }
            </button>
            <button
                onClick={loadCityWeather}
            >
                <InfoCircleTwoTone />
            </button>
        </div>
    </div>
}

export default City;
