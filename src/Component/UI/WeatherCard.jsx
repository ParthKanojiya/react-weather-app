import React, { useEffect, useState } from 'react';
import moment from 'moment';
import IconComponent from './IconComponent';
import { TbLocation, TbSunset2 } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { RiSpeedUpLine } from "react-icons/ri";

const WeatherCard = ({ tempInfo }) => {
    const [time, setTime] = useState(new Date());

    const formatUnixTimestamp = (timestamp) => {
        // Convert to milliseconds and format using moment.js
        return moment(timestamp * 1000).format('h:mm A');
    };

    // Provided timestamps
    const sunsetTimestamp = tempInfo?.sunset;
    const sunriseTimestamp = tempInfo?.sunrise;

    // Format sunset and sunrise
    const formattedSunset = formatUnixTimestamp(sunsetTimestamp);
    const formattedSunrise = formatUnixTimestamp(sunriseTimestamp);

    useEffect(() => {
        // Update time every second
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, [])

    // Get current day name
    const dayName = moment().format('dddd');

    return (
        <>
            <section
                className='grid grid-cols-1 grid-rows-3 h-full gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >

                {/* Current Weather Container Start */}
                <div className='min-w-[18rem] gap-4 rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:min-h-[25rem] row-span-2 dark:border-slate-700 dark:shadow-none bg-border'>
                    <div className="flex justify-between text-lg font-semibold">
                        <span>{dayName}</span>
                        <div className="tabular-nums">{time.toLocaleTimeString()}</div>
                    </div>
                    <div className='flex items-center gap-1 text-lg'>
                        <span className='font-bold'>{tempInfo?.name}, {tempInfo?.country}</span>
                        <TbLocation />
                    </div>
                    <div className="flex justify-center py-7 text-8xl font-bold md:py-10">
                        {Math.round(tempInfo?.temp)}°
                    </div>
                    <div>
                        <IconComponent IconCode={tempInfo?.icon} />
                    </div>
                    <div className="font-semibold text-xl">{tempInfo?.main}</div>
                    <div className="flex gap-2 dark:text-neutral-500">
                        <span>H: {Math.round(tempInfo?.temp_max)}&deg;</span>
                        <span>L: {Math.round(tempInfo?.temp_min)}&deg;</span>
                    </div>
                </div>
                {/* Current Weather Container End */}

                {/* Sunset Weather Container start */}
                <div className='relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border'>
                    <div className='flex items-center gap-4 text-base font-semibold'>
                        <span className='scale-150'><TbSunset2 /></span>
                        <span>Sunset</span>
                    </div>
                    <span className='font-semibold text-lg'>{formattedSunset}</span>
                    <div className='flex items-center gap-2'>
                        <span>Sunrise:</span>
                        <span>{formattedSunrise}</span>
                    </div>
                </div>
                {/* Sunset Weather Container End */}

                {/* Wind Weather Container start */}
                <div className='flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border'>
                    <div className='flex items-center gap-4 text-base font-semibold'>
                        <span className='scale-150'><FaWind /></span>
                        <h3>Wind</h3>
                    </div>
                    <span className='font-semibold text-lg'>{(tempInfo?.speed * 3.6).toFixed(2)} km/h</span>
                </div>
                {/* Wind Weather Container End */}

                {/* Pressure Weather Container start */}
                <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
                    <div className='flex items-center gap-4 text-base font-semibold'>
                        <span className='scale-150'><RiSpeedUpLine /></span>
                        <h3>Pressure</h3>
                    </div>
                    <div className='font-bold text-lg'>{tempInfo?.pressure} hPa</div>
                    <p>
                        {tempInfo?.pressure < 1000
                            ? "Low pressure. Expect changes in the weather."
                            : tempInfo?.pressure >= 1000 && tempInfo?.pressure <= 1010
                                ? "Normal pressure. Typical weather conditions."
                                : "High pressure. Expect stable and clear weather."}
                    </p>
                </div>
                {/* Pressure Weather Container End */}

                {/* Feels like Weather Container start */}
                <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
                    <div className='flex items-center gap-4 text-base font-semibold'>
                        <span className='scale-150'><CiTempHigh className='text-lg' /></span>
                        <h3>Feels like</h3>
                    </div>
                    <div className='font-bold text-lg'>{Math.round(tempInfo?.feels_like)}°</div>
                    <p>
                        {tempInfo?.feels_like < tempInfo?.temp
                            ? "Feels colder than the actual temperature."
                            : tempInfo?.feels_like > tempInfo?.temp
                                ? "Feels warmer than the actual temperature."
                                : "Feels like the actual temperature."
                        }

                    </p>
                </div>
                {/* Feels like Weather Container End */}

                {/* Humidity Weather Container start */}
                <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
                    <div className='flex items-center gap-4 text-base font-semibold'>
                        <span className='scale-[2]'><WiHumidity /></span>
                        <h3>Humidity</h3>
                    </div>
                    <div className='font-bold text-lg'>{Math.round(tempInfo?.humidity)}°</div>
                    <p>
                        {tempInfo?.humidity < 40
                            ? "Low humidity. It might feel dry."
                            : tempInfo?.humidity < 70
                                ? "Moderate humidity. Comfortable conditions."
                                : "High humidity. It might feel humid and uncomfortable."}
                    </p>
                </div>
                {/* Humidity Weather Container End */}

                {/* Visibility Weather Container start */}
                <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
                    <div className='flex items-center gap-4 text-base font-semibold'>
                        <span className='scale-150'><MdVisibility /></span>
                        <h3>Visibility</h3>
                    </div>
                    <div className='font-bold text-lg'>{Math.round(tempInfo?.visibility / 1000)} km</div>
                    <p>
                        {tempInfo?.visibility >= 10
                            ? "It's perfectly clear right now."
                            : tempInfo?.visibility >= 5
                                ? "Good visibility."
                                : "Poor visibility. Exercise caution while driving or moving around."}
                    </p>
                </div>
                {/* Visibility Weather Container End */}
            </section>
        </>
    );
}
export default WeatherCard;