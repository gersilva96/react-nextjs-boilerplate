/**
 * @packageDocumentation
 * @module State/Storage/LocalStorage
 * Contains a wrapper to interact with the local storage.
 */

import Storage from './Storage';

type LSType = typeof window.localStorage;

/**
 *  Wrapper for the local storage.
 */
export class LocalStorage extends Storage {
  /**
   *  Gets the local storage.
   */
  constructor() {
    super(window.localStorage);
  }

  /**
   * Returns the local storage or null if it doesn't exist.
   */
  getStorage(): LSType | null {
    return super.getStorage();
  }
}

export default new LocalStorage();
