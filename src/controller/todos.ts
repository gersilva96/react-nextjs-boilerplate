/**
 * @packageDocumentation
 * @module Controller/Todos
 * Interacts with the todos state.
 * Saves contents in the local storage.
 */

import todosActions, { TODOsList } from '~/state/actions/todos';
// import i18n from '~/internationalization';
import storages from '~/state/storages';
import { TODOType } from '~/types/TODO';

/**
 * Actions to execute on the TODOS.
 */
const todosController = {
  /**
   * Gets the todos values.
   */
  get: (): TODOsList => todosActions.get(),

  /**
   * Empties the TODOs.
   */
  empty: (): TODOsList => todosActions.empty(),

  /**
   * Adds the todo to the list.
   * @param todo TODO to add.
   */
  add: (name: string): TODOsList => {
    if (!name) {
      return todosActions.get();
    }
    return todosActions.add({ name, solved: false });
  },

  /**
   * Toggle the solved state of the TODO.
   * @param index Index to modify.
   */
  toggleSolved: (index: number): TODOsList => todosActions.toggleSolved(index),

  /**
   * Removes a TODO from the state.
   * @param index Index to remove.
   */
  remove: (index: number): TODOsList => todosActions.remove(index),

  /**
   * Shifts two elements.
   * @param firstIndex Index to move.
   * @param secondIndex Index to move.
   */
  shift: (firstIndex: number, secondIndex: number): TODOsList => todosActions.shift(firstIndex, secondIndex),

  /**
   * Saves the content to the local storage.
   */
  saveInLocalStorage: (): boolean => storages.getLocalStorage().set('TODOS', todosActions.get()),

  /**
   * Loads the content from the local storage.
   */
  getFromLocalStorage: (): boolean => {
    const LSTodos = <TODOType[]>storages.getLocalStorage().get('TODOS', []);
    LSTodos.forEach((todo) => todosActions.add(todo));
    return true;
  },
};

export default todosController;
