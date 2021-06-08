/* eslint-disable jsx-a11y/no-static-element-interactions */
/**
 * @packageDocumentation
 * @module Views/Components/NavBar
 * UI that has the NavBar.
 */

import { useState, Fragment } from 'react';

import { AppBar, Toolbar, Typography, Button, IconButton, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

import styles from './index.module.scss';
import CONSTANTS from '~/constants';
import i18n from '~/internationalization';

const { ROUTES } = CONSTANTS;

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  return (
    <Fragment>
      <SwipeableDrawer anchor="left" open={opened} onClose={toggleDrawer} onOpen={toggleDrawer}>
        <div className={styles.drawer} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <Link href={ROUTES.MAIN}>
            <a>
              <span className={styles.drawerTitle}>Template Front</span>
            </a>
          </Link>
          <div className={styles.drawerLinks}>
            <Link href={ROUTES.MAIN}>
              <a>
                <Button className={styles.navButton} color="primary" size="large" variant="contained">
                  {i18n.get('NAVIGATION_HOME')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.COUNTER}>
              <a>
                <Button className={styles.navButton} color="primary" size="large" variant="contained">
                  {i18n.get('NAVIGATION_COUNTER')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.TODOS}>
              <a>
                <Button className={styles.navButton} color="primary" size="large" variant="contained">
                  {i18n.get('NAVIGATION_TODO')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.NASA_APOD}>
              <a>
                <Button className={styles.navButton} color="primary" size="large" variant="contained">
                  {i18n.get('NAVIGATION_NASAAPOD')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.FORM}>
              <a>
                <Button className={styles.navButton} color="primary" size="large" variant="contained">
                  {i18n.get('NAVIGATION_FORM')}
                </Button>
              </a>
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
          <Link href={ROUTES.MAIN}>
            <a>
              <Typography className={styles.title} variant="h6">
                Template Front
              </Typography>
            </a>
          </Link>
          <div className={styles.navLinks}>
            <Link href={ROUTES.MAIN}>
              <a>
                <Button className={styles.navButton} color="inherit" size="large" variant="text">
                  {i18n.get('NAVIGATION_HOME')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.COUNTER}>
              <a>
                <Button className={styles.navButton} color="inherit" size="large" variant="text">
                  {i18n.get('NAVIGATION_COUNTER')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.TODOS}>
              <a>
                <Button className={styles.navButton} color="inherit" size="large" variant="text">
                  {i18n.get('NAVIGATION_TODO')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.NASA_APOD}>
              <a>
                <Button className={styles.navButton} color="inherit" size="large" variant="text">
                  {i18n.get('NAVIGATION_NASAAPOD')}
                </Button>
              </a>
            </Link>
            <Link href={ROUTES.FORM}>
              <a>
                <Button className={styles.navButton} color="inherit" size="large" variant="text">
                  {i18n.get('NAVIGATION_FORM')}
                </Button>
              </a>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
