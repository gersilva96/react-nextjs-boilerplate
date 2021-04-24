/**
 * @packageDocumentation
 * @module State/Actions/Counter
 * Interacts with the form state.
 */

import * as form from '~/state/features/formSlice';
import store from '~/state/store';
import { WordsOptionType } from '~/types/form';

/**
 * Gets the form result.
 */
const get = function get() {
  return store.getState().form.mostUsedWords;
};

/**
 * Actions that can be made in the form.
 */
const formActions = {
  /**
   * Gets the most used words.
   */
  getMostUsedWords: (): WordsOptionType[] => get(),

  /**
   * Add a word to most used words array.
   */
  addMostUsedWord: (word: WordsOptionType): WordsOptionType[] => {
    store.dispatch(form.addMostUsedWord(word));
    return get();
  },
};

export default formActions;
