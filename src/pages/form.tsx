import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import Form from '~/components/Form';
import i18n from '~/internationalization';

const FormScreen = () => (
  <Fragment>
    <NextSeo title={`${i18n.get('NAVIGATION_FORM')} | Template Front`} />
    <Form />
  </Fragment>
);

export default FormScreen;
