import { Typography } from '@material-ui/core';

import styles from './index.module.scss';
import i18n from '~/internationalization';

const Home = (): JSX.Element => (
  <div className={styles.container} data-testid="main-container">
    <Typography className={styles.title} data-testid="main-title" variant="h4" align="center">
      {i18n.get('MAIN_TITLE')}
    </Typography>
    <Typography className={styles.description} variant="h6" align="center">
      {i18n.get('MAIN_DESCRIPTION')}
    </Typography>
  </div>
);

export default Home;
