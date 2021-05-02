/**
 * @packageDocumentation
 * @module ViewSelector
 * It shows the views according to the url.
 */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ROUTES from '~/constants/routes';
import NavBar from '~/views/components/NavBar';
import styles from './index.scss';

const MainScreen = lazy(() => import('~/views/screens/Main'));
const CounterScreen = lazy(() => import('~/views/screens/Counter'));
const TODOsScreen = lazy(() => import('~/views/screens/Main'));
const NasaApodScreen = lazy(() => import('~/views/screens/NasaApod'));
const FormScreen = lazy(() => import('~/views/screens/Form'));

const Router = (): JSX.Element => (
  <BrowserRouter>
    <header className={styles.header}>
      <NavBar />
    </header>
    <div className={styles.body}>
      <div className={styles.responsiveContainer}>
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route exact path={ROUTES.FORM}>
              <FormScreen />
            </Route>
            <Route render={() => <Redirect to={ROUTES.MAIN} />} />
          </Switch>
        </Suspense>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
