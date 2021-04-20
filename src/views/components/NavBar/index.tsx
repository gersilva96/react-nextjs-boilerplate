/**
 * @packageDocumentation
 * @module Views/Components/NavBar
 * UI that has the NavBar.
 */

import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CONSTANTS from '~/constants';
import i18n from '~/internationalization';
import styles from './index.scss';

const { ROUTES } = CONSTANTS;

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  return (
    <Fragment>
      <SwipeableDrawer anchor={'left'} open={opened} onClose={toggleDrawer} onOpen={toggleDrawer}>
        <div className={styles.drawer} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <Link to={ROUTES.MAIN} className={styles.drawerTitle}>
            Template Front
          </Link>
          <div className={styles.drawerLinks}>
            <Link className={styles.navButton} to={ROUTES.MAIN}>
              <Button color="primary" size="large" variant="contained">
                {i18n.get('NAVIGATION_HOME')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.COUNTER}>
              <Button color="primary" size="large" variant="contained">
                {i18n.get('NAVIGATION_COUNTER')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.TODOS}>
              <Button color="primary" size="large" variant="contained">
                {i18n.get('NAVIGATION_TODO')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.NASA_APOD}>
              <Button color="primary" size="large" variant="contained">
                {i18n.get('NAVIGATION_NASAAPOD')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.FORM}>
              <Button color="primary" size="large" variant="contained">
                {i18n.get('NAVIGATION_FORM')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.FORMIK}>
              <Button color="primary" size="large" variant="contained">
                FORMIK
              </Button>
            </Link>
          </div>
        </div>
      </SwipeableDrawer>
      <AppBar position="fixed" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Link to={ROUTES.MAIN} className={styles.title}>
            <Typography variant="h6">Template Front</Typography>
          </Link>
          <div className={styles.navLinks}>
            <Link className={styles.navButton} to={ROUTES.MAIN}>
              <Button color="inherit" size="large" variant="text">
                {i18n.get('NAVIGATION_HOME')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.COUNTER}>
              <Button color="inherit" size="large" variant="text">
                {i18n.get('NAVIGATION_COUNTER')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.TODOS}>
              <Button color="inherit" size="large" variant="text">
                {i18n.get('NAVIGATION_TODO')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.NASA_APOD}>
              <Button color="inherit" size="large" variant="text">
                {i18n.get('NAVIGATION_NASAAPOD')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.FORM}>
              <Button color="inherit" size="large" variant="text">
                {i18n.get('NAVIGATION_FORM')}
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.FORMIK}>
              <Button color="inherit" size="large" variant="text">
                FORMIK
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
