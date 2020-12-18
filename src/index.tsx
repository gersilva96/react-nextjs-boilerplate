/**
 * @packageDocumentation
 * @module App
 * It has the start of the application.
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@model/store';

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

ReactDOM.render(<App />, document.getElementById('root'));
