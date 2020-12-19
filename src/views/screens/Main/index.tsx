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
    <div className={styles.container}>
      <div className={styles.title}>{i18n.get('MAIN_TITLE')}</div>
      <div className={styles.description}>{i18n.get('MAIN_DESCRIPTION')} </div>
    </div>
  );
};

export default MainScreen;
