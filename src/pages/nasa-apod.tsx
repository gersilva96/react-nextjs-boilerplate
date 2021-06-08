import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import NasaApod from '~/components/NasaApod';
import i18n from '~/internationalization';

const NasaApodScreen = () => (
  <Fragment>
    <NextSeo title={`${i18n.get('NAVIGATION_NASAAPOD')} | Template Front`} />
    <NasaApod />
  </Fragment>
);

export default NasaApodScreen;
