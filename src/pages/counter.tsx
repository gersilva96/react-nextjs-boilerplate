import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import Counter from '~/components/Counter';
import i18n from '~/internationalization';

const CounterScreen = () => (
  <Fragment>
    <NextSeo title={`${i18n.get('NAVIGATION_COUNTER')} | Template Front`} />
    <Counter />
  </Fragment>
);

export default CounterScreen;
