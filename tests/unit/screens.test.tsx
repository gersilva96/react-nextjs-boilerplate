/**
 * @packageDocumentation
 * @module Tests/Screens
 * It has the unit tests for the app screens.
 */

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom/extend-expect';
import CounterScreen from '../../src/components/Counter';
import FormScreen from '../../src/components/Form';
import MainScreen from '../../src/components/Home';
import NasaApodScreen from '../../src/components/NasaApod';
import TODOsScreen from '../../src/components/TODOs';
import i18n from '../../src/internationalization';
import { store } from '../../src/state';

describe('Main Screen', () => {
  it('should render correctly', () => {
    render(<MainScreen />);
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });
  it('should has the correct title', () => {
    render(<MainScreen />);
    expect(screen.getByTestId('main-title')).toHaveTextContent(i18n.get('MAIN_TITLE'));
  });
});

describe('Counter Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <CounterScreen />
      </Provider>,
    );
    expect(screen.getByTestId('counter-container')).toBeInTheDocument();
  });
});

describe('TODOs Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <TODOsScreen />
      </Provider>,
    );
    expect(screen.getByTestId('todos-container')).toBeInTheDocument();
  });
});

describe('NasaApod Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <NasaApodScreen />
        </MuiPickersUtilsProvider>
      </Provider>,
    );
    expect(screen.getByTestId('nasaapod-container')).toBeInTheDocument();
  });
});

describe('Form Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <FormScreen />
        </MuiPickersUtilsProvider>
      </Provider>,
    );
    expect(screen.getByTestId('form-container')).toBeInTheDocument();
  });
});
