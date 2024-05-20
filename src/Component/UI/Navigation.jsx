import React, { useState, useEffect } from "react";
import { RxMagnifyingGlass, RxSun } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import WeatherCards from "./WeatherCards.jsx";
import Shimmer from "./Shimmer";
import { useWeather } from "../../context/Context";

const Navigation = () => {
  const {
    searchValue,
    tempInfo,
    darkMode,
    setTempInfo,
    setDarkMode,
    setSearchValue,
    fetchWeatherInfo,
  } = useWeather();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {tempInfo.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <nav className="flex flex-col-reverse md:flex-row w-full justify-between py-4 gap-4">
            <div className="location flex items-center gap-2">
              <FaLocationDot className="text-2xl" />
              <h2 className="text-lg md:text-2xl font-inter font-extrabold">
                {tempInfo?.name}, {tempInfo?.country}
              </h2>
            </div>

            <div className="flex w-full items-center gap-4 sm:w-fit">
              <button className="inline-flex items-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/50 hover:text-accent-foreground rounded-full w-full max-w-80 md:max-w-screen-sm lg:max-w-screen-lg lg:w-96 whitespace-nowrap px-4 dark:border-slate-700 dark:shadow-none bg-border h-12">
                <p className="flex items-center justify-between gap-4 text-sm text-muted-foreground w-full h-full">
                  <input
                    type="search"
                    placeholder="Search city..."
                    className="w-full h-full outline-none text-base dark:bg-dark dark:text-white bg-transparent dark:shadow-none font-inter font-medium"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <RxMagnifyingGlass
                    className="text-xl font-bold"
                    onClick={fetchWeatherInfo}
                  />
                </p>
              </button>

              <button
                className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/50 hover:text-accent-foreground w-12 shrink-0 bg-border dark:shadow-none dark:border-slate-700 h-12"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <RxSun className="text-xl" />
              </button>
            </div>
          </nav>

          <WeatherCards />
        </>
      )}
    </>
  );
};

export default Navigation;
