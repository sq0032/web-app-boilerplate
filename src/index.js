//React npm modules
import React from 'react';
import ReactDOM from 'react-dom';

//Redux npm modules
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { webApp } from './reducers/webApp';
import App from './components/App';
import './index.css';

//Redux middlewares
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

let store = createStore(
  webApp,
  applyMiddleware(thunk, logger)
);

window.store = store;

import { login, showNotification, hideNotification, showNotificationWithTimeout } from './actions/actions';
window.actions = {
  login: login,
  showNotification: showNotification,
  hideNotification: hideNotification,
  showNotificationWithTimeout: showNotificationWithTimeout
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
