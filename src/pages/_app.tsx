import { useEffect, Fragment } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import NavBar from '~/components/NavBar';
import formController from '~/controller/form';
import todosController from '~/controller/todos';
import store from '~/state/store';
import '~/scss/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    formController.getMostUsedWordsFromLocalStorage();
    todosController.getFromLocalStorage();
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NextSeo description="Un template para aplicaciones React+Redux" />
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <header className="header">
            <NavBar />
          </header>
          <div className="body">
            <div className="responsiveContainer">
              <Component {...pageProps} />
            </div>
          </div>
        </MuiPickersUtilsProvider>
      </Provider>
    </Fragment>
  );
};
export default MyApp;
