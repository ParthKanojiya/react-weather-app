import React from "react";
import { MdVisibility } from "react-icons/md";
import { useWeather } from "../../context/Context";

const Visibility = () => {
  const { tempInfo } = useWeather();

  return (
    <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
      <div className="flex items-center gap-4 text-base font-bold">
        <span className="scale-150">
          <MdVisibility />
        </span>
        <h3>Visibility</h3>
      </div>
      <div className="font-semibold text-lg">
        {Math.round(tempInfo?.visibility / 1000)} km
      </div>
      <p className="font-medium">
        {tempInfo?.visibility >= 10
          ? "It's perfectly clear right now."
          : tempInfo?.visibility >= 5
          ? "Good visibility."
          : "Poor visibility. Exercise caution while driving or moving around."}
      </p>
    </div>
  );
};

export default Visibility;
