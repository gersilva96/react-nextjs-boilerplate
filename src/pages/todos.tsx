import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import TODOs from '~/components/TODOs';
import i18n from '~/internationalization';

const TODOsScreen = () => (
  <Fragment>
    <NextSeo title={`${i18n.get('NAVIGATION_TODO')} | Template Front`} />
    <TODOs />
  </Fragment>
);

export default TODOsScreen;
