/**
 * @packageDocumentation
 * @module ViewSelector
 * It shows the views according to the url.
 */

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ROUTES from '@constants/routes';
import CounterScreen from '@views/screens/Counter';
import Header from '@views/components/Header';
import MainScreen from '@views/screens/Main';
import styles from './index.scss';

const Router: FunctionComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ROUTES.MAIN}>
            <MainScreen />
          </Route>
          <Route exact path={ROUTES.COUNTER}>
            <CounterScreen />
          </Route>
          <Route exact path={ROUTES.TODOS}>
            <div>TODOS</div>
          </Route>
          <Route exact path={ROUTES.NASA}>
            <div>NASA</div>
          </Route>
          <Route render={() => <Redirect to={ROUTES.MAIN} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
