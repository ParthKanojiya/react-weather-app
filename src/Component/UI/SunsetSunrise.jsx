import React from "react";
import moment from "moment";
import { TbLocation, TbSunset2 } from "react-icons/tb";
import { useWeather } from "../../context/Context";

const SunsetSunrise = () => {
  const { tempInfo } = useWeather();

  const formatUnixTimestamp = (timestamp) => {
    // Convert to milliseconds and format using moment.js
    return moment(timestamp * 1000).format("h:mm A");
  };

  // Provided timestamps
  const sunsetTimestamp = tempInfo?.sunset;
  const sunriseTimestamp = tempInfo?.sunrise;

  // Format sunset and sunrise
  const formattedSunset = formatUnixTimestamp(sunsetTimestamp);
  const formattedSunrise = formatUnixTimestamp(sunriseTimestamp);

  return (
    <div className="relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 flex flex-col justify-between min-h-48 dark:border-slate-700 dark:shadow-none bg-border">
      <div className="flex items-center gap-4 text-base font-bold">
        <span className="scale-150">
          <TbSunset2 />
        </span>
        <span>Sunset</span>
      </div>
      <span className="font-semibold text-lg">{formattedSunset}</span>
      <div className="flex items-center gap-2 font-medium">
        <span>Sunrise:</span>
        <span>{formattedSunrise}</span>
      </div>
    </div>
  );
};

export default SunsetSunrise;
