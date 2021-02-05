/**
 * @packageDocumentation
 * @module Views/Components/NasaApod
 * NasaApod API Component.
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert } from '@material-ui/lab';
import i18n from '~/internationalization';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';
import nasaApodController from '~/controller/nasaApod';
import DateInput from './DateInput';
import styles from './index.scss';

const NasaApod = (): JSX.Element => {
  const { link, date, title, copyright, explanation, loading } = useSelector(nasaApodSelector);
  useEffect(() => {
    nasaApodController.setInfo();
  }, [date]);

  const isYouTubeVideo = /youtube/.test(link);

  return (
    <div className={styles.container} data-testid="nasaapod-container">
      <DateInput />
      <div className={styles.wrapper}>
        {loading && <CircularProgress className={styles.spinner} />}
        {!loading && link !== '' && (
          <p className={styles.titleParagraph}>
            <span className={styles.title}>{title}</span>
            {copyright !== '-' && ' by '}
            {copyright !== '-' && <span className={styles.copyright}>{copyright}</span>}
          </p>
        )}
        {!loading && isYouTubeVideo && (
          <iframe className={(styles.link, styles.video)} src={link}></iframe>
        )}
        {!loading && !isYouTubeVideo && link !== '' && (
          <img className={styles.link} src={link}></img>
        )}
        {!loading && link !== '' && <p className={styles.explanation}>{explanation}</p>}
        {!loading && !isYouTubeVideo && link === '' && (
          <Alert severity="info">{i18n.get('NASAAPOD_MEDIA_NOT_FOUND')}</Alert>
        )}
      </div>
    </div>
  );
};

export default NasaApod;
