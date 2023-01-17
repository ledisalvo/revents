import React from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteHandler from './app/layout/RouteHandler';

const root = createRoot(document.getElementById('root'));

function render() {
  root.render(
    <Router>
      <RouteHandler />
    </Router>
  );
}

if (module.hot) {
  module.hot.accept('./app/layout/RouteHandler', function () {
    setTimeout(render);
  });
}
render();
