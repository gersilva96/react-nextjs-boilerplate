/**
 * @packageDocumentation
 * @module ViewSelector
 * It shows the views according to the url.
 */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ROUTES from '~/constants/routes';
import styles from './index.scss';

const Router: React.FunctionComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <Route exact path={ROUTES.MAIN}>
          <div>CACA</div>
        </Route>
        <Route exact path={'/test2'}>
          <div>CACA2</div>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Router;
