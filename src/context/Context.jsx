import React, { createContext, useState, useEffect, useContext } from "react";

const WeatherContext = createContext(null);

export const Context = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [tempInfo, setTempInfo] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Default location value
  const defaultLocation = "ahmedabad";

  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${
    searchValue || defaultLocation
  }&appid=${import.meta.env.VITE_VERCEL_ENV}&units=metric`;

  const fetchWeatherInfo = async () => {
    try {
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
      console.log("Error fetching weather info:", error);
    }
  };

  useEffect(() => {
    fetchWeatherInfo();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        searchValue,
        tempInfo,
        darkMode,
        setTempInfo,
        setDarkMode,
        setSearchValue,
        fetchWeatherInfo,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
