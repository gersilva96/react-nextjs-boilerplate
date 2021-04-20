/**
 * @packageDocumentation
 * @module ViewSelector
 * It shows the views according to the url.
 */

import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ROUTES from '~/constants/routes';
import CounterScreen from '~/views/screens/Counter';
import NavBar from '~/views/components/NavBar';
import MainScreen from '~/views/screens/Main';
import TODOsScreen from '~/views/screens/TODOs';
import FormScreen from '~/views/screens/Form';
import FormikScreen from '~/views/screens/Formik';
import NasaApodScreen from '~/views/screens/NasaApod';
import styles from './index.scss';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <header className={styles.header}>
      <NavBar />
    </header>
    <div className={styles.body}>
      <div className={styles.responsiveContainer}>
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
          <Route exact path={ROUTES.FORMIK}>
            <FormikScreen />
          </Route>
          <Route render={() => <Redirect to={ROUTES.MAIN} />} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
