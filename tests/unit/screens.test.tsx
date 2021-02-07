/**
 * @packageDocumentation
 * @module Tests/Screens
 * It has the unit tests for the app screens.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import i18n from '../../src/internationalization';
import { store } from '../../src/state';
import MainScreen from '../../src/views/screens/Main';
import CounterScreen from '../../src/views/screens/Counter';
import TODOsScreen from '../../src/views/screens/TODOs';
import NasaApodScreen from '../../src/views/screens/NasaApod';

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
        <NasaApodScreen />
      </Provider>,
    );
    expect(screen.getByTestId('nasaapod-container')).toBeInTheDocument();
  });
});
