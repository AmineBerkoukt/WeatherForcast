import React from 'react';

const CurrentWeather = ({ city }) => {
  // In a real application, you would fetch this data from an API
  const weatherData = {
    temperature: 25,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 10,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">{city} - Current Weather</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-5xl font-bold text-blue-500">{weatherData.temperature}°C</p>
          <p className="text-xl text-gray-600">{weatherData.condition}</p>
        </div>
        <div>
          <p className="text-gray-600">Humidity: {weatherData.humidity}%</p>
          <p className="text-gray-600">Wind: {weatherData.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

