/**
 * @packageDocumentation
 * @hidden
 * Lets you access the store and model actions.
 */

import counterActions from './actions/counter';
import reduxStore from './store';

export const counter = counterActions;

export const store = reduxStore;

export default { counter, store };
