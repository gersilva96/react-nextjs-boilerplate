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
                Home
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.COUNTER}>
              <Button color="primary" size="large" variant="contained">
                Counter
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.TODOS}>
              <Button color="primary" size="large" variant="contained">
                Todos
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.NASA_APOD}>
              <Button color="primary" size="large" variant="contained">
                Nasa Apod
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
                Home
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.COUNTER}>
              <Button color="inherit" size="large" variant="text">
                Counter
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.TODOS}>
              <Button color="inherit" size="large" variant="text">
                Todos
              </Button>
            </Link>
            <Link className={styles.navButton} to={ROUTES.NASA_APOD}>
              <Button color="inherit" size="large" variant="text">
                Nasa Apod
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
