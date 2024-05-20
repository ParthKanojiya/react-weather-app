import React from "react";
import { RiSpeedUpLine } from "react-icons/ri";
import { useWeather } from "../../context/Context";

const Pressure = () => {
  const { tempInfo } = useWeather();

  return (
    <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
      <div className="flex items-center gap-4 text-base font-bold">
        <span className="scale-150">
          <RiSpeedUpLine />
        </span>
        <h3>Pressure</h3>
      </div>
      <div className="font-semibold text-lg">{tempInfo?.pressure} hPa</div>
      <p className="font-medium">
        {tempInfo?.pressure < 1000
          ? "Low pressure. Expect changes in the weather."
          : tempInfo?.pressure >= 1000 && tempInfo?.pressure <= 1010
          ? "Normal pressure. Typical weather conditions."
          : "High pressure. Expect stable and clear weather."}
      </p>
    </div>
  );
};

export default Pressure;
