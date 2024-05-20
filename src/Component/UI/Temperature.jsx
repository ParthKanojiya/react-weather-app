import React from "react";
import { TbLocation, TbSunset2 } from "react-icons/tb";
import IconComponent from "./IconComponent";
import moment from "moment";
import { useWeather } from "../../context/Context";

const Temperature = () => {
  const { tempInfo } = useWeather();

  // Get current day name
  const dayName = moment().format("dddd");

  return (
    <div className="min-w-[18rem] gap-4 rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:min-h-[25rem] row-span-2 dark:border-slate-700 dark:shadow-none bg-border">
      <div className="flex justify-between text-lg font-semibold">
        <span>{dayName}</span>
      </div>
      <div className="flex items-center gap-1 text-lg">
        <span className="font-bold">
          {tempInfo?.name}, {tempInfo?.country}
        </span>
        <TbLocation />
      </div>
      <div className="flex justify-center py-7 text-8xl md:py-10 font-inter font-black">
        {Math.round(tempInfo?.temp)}°
      </div>
      <div>
        <IconComponent IconCode={tempInfo?.icon} />
      </div>
      <div className="font-extrabold text-xl">{tempInfo?.main}</div>
      <div className="flex gap-2 dark:text-neutral-500 font-inter font-semibold">
        <span>H: {Math.round(tempInfo?.temp_max)}&deg;</span>
        <span>L: {Math.round(tempInfo?.temp_min)}&deg;</span>
      </div>
    </div>
  );
};

export default Temperature;
