import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import App from './App';

const RouteHandler = () => {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      {location.pathname !== '/' && <App />}
    </>
  );
};

export default RouteHandler;
