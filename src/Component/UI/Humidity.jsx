import React from "react";
import { WiHumidity } from "react-icons/wi";
import { useWeather } from "../../context/Context";

const Humidity = () => {
  const { tempInfo } = useWeather();

  return (
    <div className="flex relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
      <div className="flex items-center gap-4 text-base font-bold">
        <span className="scale-[2]">
          <WiHumidity />
        </span>
        <h3>Humidity</h3>
      </div>
      <div className="font-semibold text-lg">
        {Math.round(tempInfo?.humidity)}°
      </div>
      <p className="font-medium">
        {tempInfo?.humidity < 40
          ? "Low humidity. It might feel dry."
          : tempInfo?.humidity < 70
          ? "Moderate humidity. Comfortable conditions."
          : "High humidity. It might feel humid and uncomfortable."}
      </p>
    </div>
  );
};

export default Humidity;
