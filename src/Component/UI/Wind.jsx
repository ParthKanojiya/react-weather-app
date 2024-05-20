import React from "react";
import { FaWind } from "react-icons/fa";
import { useWeather } from "../../context/Context";

const Wind = () => {
  const { tempInfo } = useWeather();

  return (
    <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
      <div className="flex items-center gap-4 text-base font-bold">
        <span className="scale-150">
          <FaWind />
        </span>
        <h3>Wind</h3>
      </div>
      <div className="font-semibold text-lg">
        {(tempInfo?.speed * 3.6).toFixed(2)} km/h
      </div>
      <p className="font-medium">{tempInfo?.speed == undefined ? "" : ""}</p>
    </div>
  );
};

export default Wind;
