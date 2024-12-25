import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CitiesPage from './pages/CitiesPage';
import CityPage from './pages/CityPage';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/city/:city" element={<CityPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

