/**
 * @packageDocumentation
 * @module Controller/Form
 * Saves and gets contents from local storage.
 */

import formActions from '~/state/actions/form';
import storages from '~/state/storages';

/**
 * Actions to execute on the form.
 */
const formController = {
  /**
   * Saves most used words in state.
   */
  saveMostUsedWords: (words: string[]): void => {
    const existentMostUsedWordsToStrings = formActions.getMostUsedWords().map((word) => word.word);
    words.forEach((word) => {
      if (existentMostUsedWordsToStrings.indexOf(word) === -1) {
        formActions.addMostUsedWord({ word });
      }
    });
  },

  /**
   * Saves most used words in local storage.
   */
  saveMostUsedWordsInLocalStorage: (): boolean => {
    const words = formActions.getMostUsedWords().map((word) => word.word);
    return storages.getLocalStorage().set('mostUsedWords', words);
  },

  /**
   * Loads most used words from local storage.
   */
  getMostUsedWordsFromLocalStorage: (): boolean => {
    const words = <string[]>storages.getLocalStorage().get('mostUsedWords', []);
    words.forEach((word) => formActions.addMostUsedWord({ word }));
    return true;
  },
};

export default formController;
