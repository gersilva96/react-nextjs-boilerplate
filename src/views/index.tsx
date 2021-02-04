/**
 * @packageDocumentation
 * @module ViewSelector
 * It shows the views according to the url.
 */

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ROUTES from '~/constants/routes';
import CounterScreen from '~/views/screens/Counter';
import NavBar from '~/views/components/NavBar';
import MainScreen from '~/views/screens/Main';
import TODOsScreen from '~/views/screens/TODOs';
import NasaApodScreen from '~/views/screens/NasaApod';
import styles from './index.scss';

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <NavBar />
      </header>
      <div className={styles.body}>
        <Switch>
          <Route exact path={ROUTES.MAIN}>
            <MainScreen />
          </Route>
          <Route exact path={ROUTES.COUNTER}>
            <CounterScreen />
          </Route>
          <Route exact path={ROUTES.TODOS}>
            <TODOsScreen />
          </Route>
          <Route exact path={ROUTES.NASA_APOD}>
            <NasaApodScreen />
          </Route>
          <Route render={() => <Redirect to={ROUTES.MAIN} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
