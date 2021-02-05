/**
 * @packageDocumentation
 * @module Views/Screens/Main
 * Main screen for the app.
 */

import React from 'react';
import { Typography } from '@material-ui/core';
import i18n from '~/internationalization';
import styles from './index.scss';

const MainScreen = (): JSX.Element => {
  return (
    <div className={styles.container} data-testid="main-container">
      <div className={styles.responsiveContainer}>
        <Typography className={styles.title} variant="h4" align="center">
          {i18n.get('MAIN_TITLE')}
        </Typography>
        <Typography className={styles.description} variant="body1" align="center">
          {i18n.get('MAIN_DESCRIPTION')}
        </Typography>
      </div>
    </div>
  );
};

export default MainScreen;
