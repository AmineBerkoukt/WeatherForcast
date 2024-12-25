import React from 'react';


import CurrentWeather from '../components/CurrentWheather.jsx'
import WeeklyForecastSlider from '../components/WeeklyForecastSlider.jsx'
import MoroccoMap from '../components/MoroccoMap.jsx'

const HomePage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-800">Morocco Weather Forecast</h1>
      <h2>Hello world !</h2>
      <MoroccoMap />
      <CurrentWeather city="Casablanca" />
      <WeeklyForecastSlider city="Casablanca" />
      {/* <ForecastList city="Casablanca" /> */}
      
    </div>
  );
};

export default HomePage;

