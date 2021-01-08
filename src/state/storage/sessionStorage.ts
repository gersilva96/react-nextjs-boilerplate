/**
 * @packageDocumentation
 * @module State/Storage/SessionStorage
 * Contains a wrapper to interact with the session storage.
 */

import Storage from './Storage';

type SSType = typeof window.sessionStorage;

/**
 *  Wrapper for the session storage.
 */
export class SessionStorage extends Storage {
  /**
   *  Gets the session storage.
   */
  constructor() {
    super(window.sessionStorage);
  }

  /**
   * Returns the session storage or null if it doesn't exist.
   */
  getStorage(): SSType | null {
    return super.getStorage();
  }
}

export default new SessionStorage();
