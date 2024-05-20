import React from "react";
import Temperature from "./Temperature";
import SunsetSunrise from "./SunsetSunrise";
import Wind from "./Wind";
import Pressure from "./Pressure";
import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import Visibility from "./Visibility";

const WeatherCards = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-3 h-full gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Temperature />
      <SunsetSunrise />
      <Wind />
      <Pressure />
      <FeelsLike />
      <Humidity />
      <Visibility />
    </section>
  );
};
export default WeatherCards;
