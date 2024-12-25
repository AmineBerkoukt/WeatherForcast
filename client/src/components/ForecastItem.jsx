import React from 'react';
import ForecastItem from './ForecastItem';

const ForecastList = ({ city }) => {
  // In a real application, you would fetch this data from an API
  const forecastData = [
    { date: '2023-05-01', temperature: 26, condition: 'Sunny' },
    { date: '2023-05-02', temperature: 27, condition: 'Partly Cloudy' },
    { date: '2023-05-03', temperature: 25, condition: 'Cloudy' },
    { date: '2023-05-04', temperature: 24, condition: 'Rainy' },
    { date: '2023-05-05', temperature: 26, condition: 'Sunny' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">{city} - 5 Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <ForecastItem key={index} {...day} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;

