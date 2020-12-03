/**
 * @packageDocumentation
 * @module App
 * It has the start of the application.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.scss';

const App = () => {
  return <h1 className={styles.title}>Starting app!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
