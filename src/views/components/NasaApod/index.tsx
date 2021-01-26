/**
 * @packageDocumentation
 * @module Views/Components/NasaApod
 * NasaApod API Component.
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import i18n from '~/internationalization';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';
import nasaApodController from '~/controller/nasaApod';
import DateInput from './DateInput';
import styles from './index.scss';

const NasaApod = (): JSX.Element => {
  const { link, date, loading } = useSelector(nasaApodSelector);
  useEffect(() => {
    nasaApodController.setLink();
  }, [date]);

  const isYouTubeVideo = /youtube/.test(link);

  return (
    <div className={styles.container} data-testid="nasaapod-container">
      <DateInput />
      <div className={styles.wrapper}>
        <BeatLoader loading={loading} color={'#61DAFA'} />
        {!loading && isYouTubeVideo && <iframe className={styles.link} src={link}></iframe>}
        {!loading && !isYouTubeVideo && link !== '' && (
          <img className={styles.link} src={link}></img>
        )}
        {!loading && !isYouTubeVideo && link === '' && (
          <span>{i18n.get('NASAAPOD_MEDIA_NOT_FOUND')}</span>
        )}
      </div>
    </div>
  );
};

export default NasaApod;
