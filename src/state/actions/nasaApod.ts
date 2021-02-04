/**
 * @packageDocumentation
 * @module State/Actions/NasaApod
 * Interacts with the NasaApod state.
 */

import * as nasaApod from '~/state/features/nasaApodSlice';
import store from '~/state/store';

/**
 * Gets the nasaApod result.
 */
const get = function get() {
  return store.getState().nasaApod;
};

/**
 * Actions that can be made in the nasaApod.
 */
const nasaApodActions = {
  /**
   * Gets the image link.
   */
  getLink: (): string => get().link,

  /**
   * Gets the date value.
   */
  getDate: (): string => get().date,

  /**
   * Gets the title value.
   */
  getTitle: (): string => get().title,

  /**
   * Gets the copyright value.
   */
  getCopyright: (): string => get().copyright,

  /**
   * Gets the explanation value.
   */
  getExplanation: (): string => get().explanation,

  /**
   * Gets the status of loading.
   */
  getLoading: (): boolean => get().loading,

  /**
   * Sets and gets a new image.
   */
  setLink: (img: string): string => {
    store.dispatch(nasaApod.setLink(img));
    return nasaApodActions.getLink();
  },

  /**
   * Sets and gets the date value.
   */
  setDate: (date: string): string => {
    store.dispatch(nasaApod.setDate(date));
    return nasaApodActions.getDate();
  },

  /**
   * Sets and gets the title value.
   */
  setTitle: (title: string): string => {
    store.dispatch(nasaApod.setTitle(title));
    return nasaApodActions.getTitle();
  },

  /**
   * Sets and gets the copyright value.
   */
  setCopyright: (copyright: string): string => {
    store.dispatch(nasaApod.setCopyright(copyright));
    return nasaApodActions.getCopyright();
  },

  /**
   * Sets and gets the explanation value.
   */
  setExplanation: (explanation: string): string => {
    store.dispatch(nasaApod.setExplanation(explanation));
    return nasaApodActions.getExplanation();
  },

  /**
   * Sets the status of loading (boolean).
   */
  setLoading: (isLoading: boolean): boolean => {
    store.dispatch(nasaApod.setLoading(isLoading));
    return nasaApodActions.getLoading();
  },
};

export default nasaApodActions;
