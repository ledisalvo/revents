import React from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import './app/layout/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <
//   }
// ]);

function render() {
  root.render(
    <Router>
      <App />
    </Router>
  );
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function () {
    setTimeout(render);
  });
}
render();
