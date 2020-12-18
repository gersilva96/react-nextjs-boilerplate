/**
 * @packageDocumentation
 * @module ViewSelector
 * It shows the views according to the url.
 */

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ROUTES from '@constants/routes';
import CounterScreen from '@views/screens/Counter';
import styles from './index.scss';

const Router: FunctionComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <Route exact path={ROUTES.MAIN}>
          <div>CACA</div>
          <Link to={ROUTES.COUNTER}>
            <button>Counter Screen</button>
          </Link>
          <Link to={'/test2'}>
            <button>Test2 route</button>
          </Link>
        </Route>
        <Route exact path={'/test2'}>
          <div>CACA2</div>
        </Route>
        <Route exact path={ROUTES.COUNTER}>
          <CounterScreen />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Router;
