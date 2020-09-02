import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("/api/csrf/token");
  };

  getCSRFToken();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
