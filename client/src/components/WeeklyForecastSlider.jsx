import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const WeeklyForecastSlider = ({ city }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // In a real application, you would fetch this data from an API
  const weeklyForecast = [
    { date: '2023-05-01', temperature: 26, condition: 'Sunny' },
    { date: '2023-05-02', temperature: 27, condition: 'Partly Cloudy' },
    { date: '2023-05-03', temperature: 25, condition: 'Cloudy' },
    { date: '2023-05-04', temperature: 24, condition: 'Rainy' },
    { date: '2023-05-05', temperature: 26, condition: 'Sunny' },
    { date: '2023-05-06', temperature: 28, condition: 'Sunny' },
    { date: '2023-05-07', temperature: 27, condition: 'Partly Cloudy' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % weeklyForecast.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + weeklyForecast.length) % weeklyForecast.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">{city} - 7 Day Forecast</h2>
      <div className="relative">
        <div className="flex overflow-x-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {[...weeklyForecast, ...weeklyForecast.slice(0, 2)].map((day, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-2">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-blue-800">
                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <p className="text-3xl font-bold text-blue-500 my-2">{day.temperature}°C</p>
                  <p className="text-gray-600">{day.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeftIcon className="h-6 w-6 text-blue-500" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRightIcon className="h-6 w-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default WeeklyForecastSlider;

