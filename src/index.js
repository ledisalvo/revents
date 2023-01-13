import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import './app/layout/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function render() {
  root.render(<App />);
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function () {
    setTimeout(render);
  });
}
render();
