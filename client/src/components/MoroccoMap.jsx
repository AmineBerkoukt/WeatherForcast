import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoroccoMap = () => {
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    navigate(`/city/${city.toLowerCase()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Morocco Weather Map</h2>
      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        <svg
          viewBox="0 0 800 600"
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3))' }}
        >
          {/* Morocco map outline */}
          <path
            d="M100,300 L150,200 L250,150 L400,100 L550,150 L650,250 L700,350 L650,450 L550,500 L400,550 L250,500 L150,400 Z"
            fill="#f0f9ff"
            stroke="#3b82f6"
            strokeWidth="4"
          />
          
          {/* Atlantic Ocean */}
          <path
            d="M0,0 L100,300 L150,400 L250,500 L400,550 L400,600 L0,600 Z"
            fill="#cae8ff"
            opacity="0.5"
          />
          
          {/* Mediterranean Sea */}
          <path
            d="M150,200 L250,150 L400,100 L800,100 L800,0 L0,0 L100,300 Z"
            fill="#cae8ff"
            opacity="0.5"
          />

          {/* Cities */}
          <circle cx="180" cy="220" r="8" fill="#3b82f6" onClick={() => handleCityClick('Tangier')} className="cursor-pointer hover:fill-blue-400" />
          <text x="190" y="225" fontSize="14" fill="#1e40af">Tangier</text>
          
          <circle cx="170" cy="280" r="8" fill="#3b82f6" onClick={() => handleCityClick('Rabat')} className="cursor-pointer hover:fill-blue-400" />
          <text x="180" y="285" fontSize="14" fill="#1e40af">Rabat</text>
          
          <circle cx="200" cy="320" r="8" fill="#3b82f6" onClick={() => handleCityClick('Casablanca')} className="cursor-pointer hover:fill-blue-400" />
          <text x="210" y="325" fontSize="14" fill="#1e40af">Casablanca</text>
          
          <circle cx="300" cy="400" r="8" fill="#3b82f6" onClick={() => handleCityClick('Marrakech')} className="cursor-pointer hover:fill-blue-400" />
          <text x="310" y="405" fontSize="14" fill="#1e40af">Marrakech</text>
          
          <circle cx="350" cy="280" r="8" fill="#3b82f6" onClick={() => handleCityClick('Fes')} className="cursor-pointer hover:fill-blue-400" />
          <text x="360" y="285" fontSize="14" fill="#1e40af">Fes</text>
          
          <circle cx="220" cy="480" r="8" fill="#3b82f6" onClick={() => handleCityClick('Agadir')} className="cursor-pointer hover:fill-blue-400" />
          <text x="230" y="485" fontSize="14" fill="#1e40af">Agadir</text>

          {/* Sahara Desert */}
          <path
            d="M400,400 Q500,450 600,400 T800,400 L800,600 L400,600 Z"
            fill="#fef3c7"
            opacity="0.5"
          />
          <text x="550" y="500" fontSize="18" fill="#92400e" fontStyle="italic">Sahara Desert</text>

          {/* Atlas Mountains */}
          <path
            d="M300,300 L350,250 L400,300 L450,250 L500,300"
            fill="none"
            stroke="#78350f"
            strokeWidth="3"
          />
          <text x="350" y="230" fontSize="16" fill="#78350f" fontStyle="italic">Atlas Mountains</text>
        </svg>
      </div>
    </div>
  );
};

export default MoroccoMap;

