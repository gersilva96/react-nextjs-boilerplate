/**
 * @packageDocumentation
 * @module App
 * It has the start of the application.
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import todosController from './controller/todos';
import formController from './controller/form';
import store from '~/state/store';

import './index.scss';
import Views from './views';

const App = () => (
  <Provider store={store}>
    <StrictMode>
      <Views />
    </StrictMode>
  </Provider>
);

/**
 * Starts the app.
 */
const start = async function start() {
  // TODO: Can do something async here.

  // TODO: Initialization of the app.
  todosController.getFromLocalStorage();
  formController.getMostUsedWordsFromLocalStorage();

  ReactDOM.render(<App />, document.getElementById('root'));
};

start();
