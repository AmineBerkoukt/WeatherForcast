import React from 'react';

const ForecastItem = ({ date, temperature, condition }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4 text-center">
      <p className="font-semibold text-blue-800">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
      <p className="text-3xl font-bold text-blue-500 my-2">{temperature}°C</p>
      <p className="text-gray-600">{condition}</p>
    </div>
  );
};

export default ForecastItem;

