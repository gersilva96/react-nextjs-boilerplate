/**
 * @packageDocumentation
 * @module State/Actions/Todos
 * Interacts with the todos state.
 */

import * as todos from '~/state/features/todoSlice';
import store from '~/state/store';
import { TODOType } from '~/types/TODO';

export type TODOsList = TODOType[];

/**
 * Gets the todos result.
 */
const get = function get() {
  return store.getState().todos;
};

/**
 * Actions that can be made in the todos.
 */
const todosActions = {
  /**
   * Gets the todos values.
   */
  get: (): TODOsList => get(),

  /**
   * Empties the TODOs.
   */
  empty: (): TODOsList => {
    store.dispatch(todos.empty());
    return get();
  },

  /**
   * Adds the todo to the list.
   * @param todo TODO to add.
   */
  add: (todo: TODOType): TODOsList => {
    store.dispatch(todos.add(todo));
    return get();
  },

  /**
   * Toggle the solved state of the TODO.
   * @param index Index to modify.
   */
  toggleSolved: (index: number): TODOsList => {
    store.dispatch(todos.toggleSolved(index));
    return get();
  },

  /**
   * Removes a TODO from the state.
   * @param index Index to remove.
   */
  remove: (index: number): TODOsList => {
    store.dispatch(todos.remove(index));
    return get();
  },

  /**
   * Shifts two elements.
   * @param firstIndex Index to move.
   * @param secondIndex Index to move.
   */
  shift: (firstIndex: number, secondIndex: number): TODOsList => {
    store.dispatch(todos.shift({ firstIndex, secondIndex }));
    return get();
  },
};

export default todosActions;
