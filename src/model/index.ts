/**
 * @packageDocumentation
 * @hidden
 * Lets you access the store and the features.
 */

import * as counterActions from './features/counterSlice';
import reduxStore from './store';

export const counter = counterActions;

export const store = reduxStore;

export default { counter, store };
