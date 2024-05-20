import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { useWeather } from "../../context/Context";

const FeelsLike = () => {
  const { tempInfo } = useWeather();

  return (
    <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
      <div className="flex items-center gap-4 text-base font-bold">
        <span className="scale-150">
          <CiTempHigh className="text-lg" />
        </span>
        <h3>Feels Like</h3>
      </div>
      <div className="font-semibold text-lg">
        {Math.round(tempInfo?.feels_like)}°
      </div>
      <p className="font-medium">
        {tempInfo?.feels_like < tempInfo?.temp
          ? "Feels colder than the actual temperature."
          : tempInfo?.feels_like > tempInfo?.temp
          ? "Feels warmer than the actual temperature."
          : "Feels like the actual temperature."}
      </p>
    </div>
  );
};

export default FeelsLike;
