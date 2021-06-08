/**
 * @packageDocumentation
 * @module State/Storages
 * Contains wrappers to use with session and local storages.
 */

import { isUndefined } from 'lodash';

import Storage from './Storage';

type StorageType = Storage | undefined;

/**
 *  Gets the different storages.
 */
export class Storages {
  private _sessionStorage: StorageType = undefined;

  private _localStorage: StorageType = undefined;

  /**
   * Returns the session storage wrapper.
   */
  getSessionStorage(): Storage {
    if (!isUndefined(this._sessionStorage)) {
      return this._sessionStorage;
    }

    this._checkWindowExists();
    this._sessionStorage = new Storage(window.sessionStorage);
    return this._sessionStorage;
  }

  /**
   * Returns the local storage wrapper.
   */
  getLocalStorage(): Storage {
    if (!isUndefined(this._localStorage)) {
      return this._localStorage;
    }

    this._checkWindowExists();
    this._localStorage = new Storage(window.localStorage);
    return this._localStorage;
  }

  /**
   *
   * PRIVATE METHODS.
   *
   */

  /**
   * Check the window exists.
   */
  private _checkWindowExists(): boolean {
    if (isUndefined(window)) {
      throw new Error("'Window' doesn't exist. Are you trying to execute this in server side rendering?");
    }
    return true;
  }
}

export default new Storages();
