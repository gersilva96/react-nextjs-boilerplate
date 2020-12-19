/**
 * @packageDocumentation
 * @module Views/Screens/Main
 * Main screen for the app.
 */

import React from 'react';

import styles from './index.scss';

const MainScreen = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>TODO: TITULO</div>
      <div className={styles.description}>TODO: DESCRIPTION</div>
    </div>
  );
};

export default MainScreen;
