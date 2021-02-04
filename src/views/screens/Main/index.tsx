/**
 * @packageDocumentation
 * @module Views/Screens/Main
 * Main screen for the app.
 */

import React from 'react';
import i18n from '~/internationalization';
import styles from './index.scss';

const MainScreen = (): JSX.Element => {
  return (
    <div className={styles.container} data-testid="main-container">
      <div className={styles.responsiveContainer}>
        <h1 className={styles.title}>{i18n.get('MAIN_TITLE')}</h1>
        <p className={styles.description}>{i18n.get('MAIN_DESCRIPTION')}</p>
      </div>
    </div>
  );
};

export default MainScreen;
