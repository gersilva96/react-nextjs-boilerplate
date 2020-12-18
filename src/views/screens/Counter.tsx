/**
 * @packageDocumentation
 * @module Views/Screens/Counter
 * Contains the counter screen.
 */

import React, { Fragment } from 'react';
import Counter from '@views/components/Counter';

const CounterScreen = (): JSX.Element => {
  return (
    <Fragment>
      <Counter />
    </Fragment>
  );
};

export default CounterScreen;
