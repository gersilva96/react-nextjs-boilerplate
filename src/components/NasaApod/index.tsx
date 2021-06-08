/**
 * @packageDocumentation
 * @module Views/Components/NasaApod
 * NasaApod API Component.
 */

import { useEffect } from 'react';

import { Typography, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useSelector } from 'react-redux';

import DateInput from './DateInput';
import styles from './index.module.scss';
import nasaApodController from '~/controller/nasaApod';
import i18n from '~/internationalization';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';

const NasaApod = (): JSX.Element => {
  const { link, date, title, copyright, explanation, loading } = useSelector(nasaApodSelector);
  useEffect(() => {
    nasaApodController.setInfo();
  }, [date]);

  const isYouTubeVideo = /youtube/.test(link);

  return (
    <div className={styles.container} data-testid="nasaapod-container">
      <Typography className={styles.title} variant="h4" align="center">
        {i18n.get('NASAAPOD_TITLE')}
      </Typography>
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
          <div className={styles.videoContainer}>
            <iframe title="nasa video" allowFullScreen className={styles.video} src={link} />
          </div>
        )}
        {!loading && !isYouTubeVideo && link !== '' && <img className={styles.image} src={link} alt="nasa pic" />}
        {!loading && link !== '' && <p className={styles.explanation}>{explanation}</p>}
        {!loading && !isYouTubeVideo && link === '' && (
          <Alert severity="info">{i18n.get('NASAAPOD_MEDIA_NOT_FOUND')}</Alert>
        )}
      </div>
    </div>
  );
};

export default NasaApod;
