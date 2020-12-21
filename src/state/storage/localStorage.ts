/**
 * @packageDocumentation
 * @module State/Storage/LocalStorage
 * Contains a wrapper to interact with the local storage.
 */

import { isNull, isString } from 'lodash';

type LSType = typeof window.localStorage;

/**
 *  Wrapper for the local storage.
 */
export class LocalStorage {
  /**
   * Contains if the windows has a local storage.
   */
  private _hasLS = false;

  /**
   * Contains the local storage.
   */
  private _LS = window.localStorage;

  /**
   *  Gets the local storage.
   */
  constructor() {
    this._hasLS = this._checkLocalStorage();
  }

  /**
   * Return if the local storage exists.
   */
  hasLocalStorage(): boolean {
    return this._hasLS;
  }

  /**
   * Returns the local storage or null if it doesn't exist.
   */
  getLocalStorage(): LSType | null {
    if (!this._hasLS) {
      return null;
    }
    return this._LS;
  }

  /**
   * Gets the items in the local storage. Returns the default value if it cannot find it.
   * @param key Key to get from the local storage.
   */
  get(key: string, defaultValue: unknown): unknown {
    if (!this._hasLS) {
      return defaultValue;
    }

    const value = this._LS.getItem(key);
    if (isNull(value)) {
      return defaultValue;
    }
    if (!isString(value)) {
      return value;
    }
    return JSON.parse(value);
  }

  /**
   * Returns the keys of FALSE if there's not a LS.
   */
  getKeys(): string[] | false {
    if (!this._hasLS) {
      return false;
    }

    const keys = [];
    for (let i = 0; i < this._LS.length; i += 1) {
      const key = this._LS.key(i);
      if (!isNull(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  /**
   * Returns how many keys it has or FALSE if it has not a local storage.
   */
  getKeysCount(): number | false {
    const keys = this.getKeys();
    if (keys === false) {
      return false;
    }
    return keys.length;
  }

  /**
   * Sets the items in the local storage.
   * @param key Key to save in the local storage.
   * @param value Value to save in the LS.
   */
  set(key: string, value: unknown): boolean {
    if (!this._hasLS) {
      return false;
    }
    try {
      const jsonValue = JSON.stringify(value);
      this._LS.setItem(key, jsonValue);
    } catch (error) {
      return false;
    }
    return true;
  }

  /**
   * Removes an item by its name.
   * @param key Kye of the item to delete.
   */
  remove(key: string): boolean {
    if (!this._hasLS) {
      return false;
    }
    this._LS.removeItem(key);
    return true;
  }

  /**
   * Empties the local storage.
   */
  empty(): boolean {
    if (!this._hasLS) {
      return false;
    }
    this._LS.clear();
    return true;
  }

  /**
   *
   * PRIVATE METHODS
   *
   */

  /**
   * 	Returns if there is a Local Storage.
   */
  private _checkLocalStorage(): boolean {
    if (!window.localStorage) {
      return false;
    }
    const rand = Math.random() * 500000;
    const testKey = `TEST_${btoa(rand.toString())}`;
    try {
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
    } catch (error) {
      return false;
    }
    return true;
  }
}

export default new LocalStorage();
