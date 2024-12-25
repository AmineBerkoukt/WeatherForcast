import React from 'react';
import { useParams } from 'react-router-dom';
import CurrentWeather from '../components/CurrentWheather.jsx'
import WeeklyForecastSlider from '../components/WeeklyForecastSlider.jsx';
import ForecastList from '../components/ForecastItem.jsx';

const CityPage = () => {
  const { city } = useParams();
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-800">{capitalizedCity} Weather Forecast</h1>
      <CurrentWeather city={capitalizedCity} />
      <WeeklyForecastSlider city={capitalizedCity} />
      <ForecastList city={capitalizedCity} />
    </div>
  );
};

export default CityPage;

