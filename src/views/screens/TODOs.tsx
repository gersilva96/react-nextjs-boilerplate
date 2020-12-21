/**
 * @packageDocumentation
 * @module Views/Screens/TODOs
 * Contains the todos screen.
 */

import React, { Fragment } from 'react';
import TODOs from '@views/components/TODOs';

const TODOsScreen = (): JSX.Element => {
  return (
    <Fragment>
      <TODOs />
    </Fragment>
  );
};

export default TODOsScreen;
