/**
 * @packageDocumentation
 * @hidden
 * Lets you access the store and model actions.
 */

import counterActions from './actions/counter';
import todosActions from './actions/todos';
import nasaApodActions from './actions/nasaApod';
import tmpStorages from './storages';

import reduxStore from './store';

export const counter = counterActions;
export const todos = todosActions;
export const nasaApod = nasaApodActions;
export const store = reduxStore;
export const storages = tmpStorages;

// TODO: Add the different elements to use as a Facade.
/**
 *  Different actions on the state.
 */
const actions = {
  /**
   * Counter actions.
   */
  counter,

  /**
   * Todos actions.
   */
  todos,

  /**
   * NasaApod actions.
   */
  nasaApod,
};

export default { actions, storages, store };
