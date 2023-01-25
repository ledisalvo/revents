import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import App from './App';
import ScrollToTop from './ScrollToTop';

const RouteHandler = () => {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      {location.pathname !== '/' && (
        <>
          <ScrollToTop />
          <App />
        </>
      )}
    </>
  );
};

export default RouteHandler;
