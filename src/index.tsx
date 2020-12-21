/**
 * @packageDocumentation
 * @module App
 * It has the start of the application.
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import todos from './controller/todos';
import store from '@state/store';

import './index.scss';
import Views from './views';

const App = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <Views />
      </StrictMode>
    </Provider>
  );
};

/**
 * Starts the app.
 */
const start = async function start() {
  // TODO: Can do something async here.

  // TODO: Initialization of the app.
  todos.getFromLocalStorage();

  ReactDOM.render(<App />, document.getElementById('root'));
};

start();
