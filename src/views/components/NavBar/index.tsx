/**
 * @packageDocumentation
 * @module Views/Components/NavBar
 * UI that has the NavBar.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import CONSTANTS from '~/constants';
import styles from './index.scss';

const { ROUTES } = CONSTANTS;

const NavBar = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <Link to={ROUTES.MAIN}>
        <div className={styles.headerOption}>Main</div>
      </Link>
      <Link to={ROUTES.COUNTER}>
        <div className={styles.headerOption}>Counter</div>
      </Link>
      <Link to={ROUTES.TODOS}>
        <div className={styles.headerOption}>TODOS</div>
      </Link>
      <Link to={ROUTES.NASA_APOD}>
        <div className={styles.headerOption}>NASA API</div>
      </Link>
    </div>
  );
};

export default NavBar;
