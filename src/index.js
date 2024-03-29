import React from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-calendar/dist/Calendar.css';
import './app/layout/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteHandler from './app/layout/RouteHandler';
import { Provider } from 'react-redux';
import configStore from './app/store/configStore';
import { loadEvents } from './features/events/eventActions';

const store = configStore();

store.dispatch(loadEvents());

const root = createRoot(document.getElementById('root'));

function render() {
  root.render(
    <Provider store={store}>
      <Router>
        <RouteHandler />
      </Router>
    </Provider>
  );
}

if (module.hot) {
  module.hot.accept('./app/layout/RouteHandler', function () {
    setTimeout(render);
  });
}
render();
