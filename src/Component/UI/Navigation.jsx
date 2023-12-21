import React, { useState, useEffect } from 'react';
import { RxMagnifyingGlass, RxSun } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import WeatherCard from './WeatherCard';

const Navigation = () => {
    const [searchValue, setSearchValue] = useState("ahmedabad");
    const [tempInfo, setTempInfo] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    // const API_KAY = "fe4feefa8543e06d4f3c66d92c61b69c";
    const API_KAY = "b1e7c4cb104550c0c693ceb415ac3553";

    const fetchWeatherInfo = async () => {
        try {
            let URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KAY}&units=metric`;
            const response = await fetch(URL);
            const data = await response.json();

            const myWeatherInfo = {
                ...data.main,
                visibility: data.visibility,
                name: data.name,
                speed: data.wind.speed,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                country: data.sys.country,
                main: data.weather[0].main,
                lon: data.coord.lon,
                lat: data.coord.lat,
                timezone: data.timezone,
                icon: data.weather[0].icon,
            };
            setTempInfo(myWeatherInfo);

        } catch (error) {
            console.log('Error fetching weather info:', error);
        }
    }

    useEffect(() => {
        fetchWeatherInfo()
        const theme = localStorage.getItem("theme");
        if (theme == "dark") setDarkMode(false)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])

    return (

        <>
            <nav className="flex flex-col-reverse md:flex-row w-full justify-between py-4 gap-4">

                <div className="location flex items-center gap-2">
                    <FaLocationDot className='text-2xl' />
                    <h2 className='font-bold text-sm md:text-2xl'>{tempInfo?.name}, {tempInfo?.country}</h2>
                </div>

                <div className="flex w-full items-center gap-4 sm:w-fit">

                    <button className="inline-flex items-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/50 hover:text-accent-foreground rounded-md h-9 w-full max-w-80 md:max-w-screen-sm lg:max-w-screen-lg lg:w-96 whitespace-nowrap px-4">
                        <p className="flex items-center justify-between gap-4 text-sm text-muted-foreground w-full h-full">

                            <input type="search" placeholder='Search city...' className='w-full h-full outline-none text-base dark:bg-black dark:text-white'
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <RxMagnifyingGlass className='text-xl font-bold'
                                onClick={fetchWeatherInfo}
                            />
                        </p>
                    </button>

                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/50 hover:text-accent-foreground w-10 h-9 shrink-0" type="button"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        <RxSun className='text-xl' />
                    </button>
                </div>
            </nav>

            <WeatherCard tempInfo={tempInfo} />
        </>

    )
}

export default Navigation