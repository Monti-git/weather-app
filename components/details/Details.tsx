
import { IWeather } from "libs/data";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { Carousel } from "antd";
import cn from 'classnames';
import s from './Details.module.css'
const dateFormat = require("dateformat");
import Image from 'next/image'


const WeatherDetails = (weather: IWeather) => {

    return <div className={cn(s.root)}>
        <h2>
            {weather.title}, {weather.parent.title}
        </h2>
        <Carousel>
            {
                weather.consolidated_weather?.map(day =>
                    <div key = {day.id}>
                        <div className={cn(s.day)}>
                            <h3>
                                {dateFormat(day.applicable_date, "ddd mmm dd yyyy")}
                            </h3>
                            <div className={cn(s.pronostic)}>
                                <span>
                                    {day.the_temp.toFixed(2)} C
                                </span>
                                <span>
                                    <Image
                                        unoptimized={true}
                                        width="64"
                                        height="64"
                                        src={`https://www.metaweather.com/static/img/weather/png/64/${day.weather_state_abbr}.png`}
                                        alt={day.weather_state_name}
                                    />
                                </span>
                            </div>
                            <div className={cn(s.data)}>
                                <span>
                                    min {day.min_temp.toFixed(2)}
                                </span>
                                <span>
                                    max {day.max_temp.toFixed(2)}
                                </span>
                            </div>
                            <div className={cn(s.data)}>
                                <span>
                                    {day.wind_speed.toFixed(2)} mph
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        </Carousel>
    </div>
}

export default WeatherDetails;