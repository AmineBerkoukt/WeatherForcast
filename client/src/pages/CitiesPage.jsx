import React from 'react';
import { Link } from 'react-router-dom';

const CitiesPage = () => {
  const cities = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fes',
    'Tangier',
    'Agadir',
    'Meknes',
    'Oujda',
    'Kenitra',
    'Tetouan',
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Major Cities in Morocco</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.map((city) => (
          <Link
            key={city}
            to={`/city/${city.toLowerCase()}`}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-blue-50 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-800">{city}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitiesPage;

