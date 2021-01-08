/**
 * @packageDocumentation
 * @module State/Storage/Storage
 * Contains a wrapper for storages.
 */

import { isNull, isString } from 'lodash';

type StorageType = typeof window.localStorage | typeof window.sessionStorage;

/**
 *  Wrapper for the storage.
 */
export class Storage {
  /**
   * Contains if the windows has the storage.
   */
  private _hasStorage = false;

  /**
   * Contains the storage.
   */
  private _storage;

  /**
   *  Gets the storage.
   */
  constructor(storage: StorageType) {
    this._storage = storage;
    this._hasStorage = this._checkStorage();
  }

  /**
   * Return if the storage exists.
   */
  hasStorage(): boolean {
    return this._hasStorage;
  }

  /**
   * Returns the storage or null if it doesn't exist.
   */
  getStorage(): StorageType | null {
    if (!this._hasStorage) {
      return null;
    }
    return this._storage;
  }

  /**
   * Gets the items in the  storage. Returns the default value if it cannot find it.
   * @param key Key to get from the  storage.
   */
  get(key: string, defaultValue: unknown): unknown {
    if (!this._hasStorage) {
      return defaultValue;
    }

    const value = this._storage.getItem(key);
    if (isNull(value)) {
      return defaultValue;
    }
    if (!isString(value)) {
      return value;
    }
    return JSON.parse(value);
  }

  /**
   * Returns the keys of FALSE if there's not a storage.
   */
  getKeys(): string[] | false {
    if (!this._hasStorage) {
      return false;
    }

    const keys = [];
    for (let i = 0; i < this._storage.length; i += 1) {
      const key = this._storage.key(i);
      if (!isNull(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  /**
   * Returns how many keys it has or FALSE if it has not a  storage.
   */
  getKeysCount(): number | false {
    const keys = this.getKeys();
    if (keys === false) {
      return false;
    }
    return keys.length;
  }

  /**
   * Sets the items in the  storage.
   * @param key Key to save in the  storage.
   * @param value Value to save in the storage.
   */
  set(key: string, value: unknown): boolean {
    if (!this._hasStorage) {
      return false;
    }
    try {
      const jsonValue = JSON.stringify(value);
      this._storage.setItem(key, jsonValue);
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
    if (!this._hasStorage) {
      return false;
    }
    this._storage.removeItem(key);
    return true;
  }

  /**
   * Empties the  storage.
   */
  empty(): boolean {
    if (!this._hasStorage) {
      return false;
    }
    this._storage.clear();
    return true;
  }

  /**
   *
   * PRIVATE METHODS
   *
   */

  /**
   * 	Returns if there is a  Storage.
   */
  private _checkStorage(): boolean {
    if (!this._storage) {
      return false;
    }
    const rand = Math.random() * 500000;
    const testKey = `TEST_${btoa(rand.toString())}`;
    try {
      this._storage.setItem(testKey, testKey);
      this._storage.removeItem(testKey);
    } catch (error) {
      return false;
    }
    return true;
  }
}

export default Storage;
