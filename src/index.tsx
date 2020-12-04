/**
 * @packageDocumentation
 * @module App
 * It has the start of the application.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import Views from './views';

const App = () => {
  return (
    <React.StrictMode>
      <Views />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
