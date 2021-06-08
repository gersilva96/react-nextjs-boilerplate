import { Fragment } from 'react';

import Head from 'next/head';

import Home from '~/components/Home';

const HomeScreen = () => (
  <Fragment>
    <Head>
      <title>Template Front</title>
    </Head>
    <Home />
  </Fragment>
);

export default HomeScreen;
