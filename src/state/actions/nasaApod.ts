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
  getImage: (): string => get().link,

  /**
   * Gets the date value.
   */
  getDate: (): string => get().date,

  /**
   * Gets the status of loading.
   */
  getLoading: (): boolean => get().loading,

  /**
   * Sets and gets a new image.
   */
  setImage: (img: string): string => {
    store.dispatch(nasaApod.setImage(img));
    return nasaApodActions.getImage();
  },

  /**
   * Sets and gets the date value.
   */
  setDate: (date: string): string => {
    store.dispatch(nasaApod.setDate(date));
    return nasaApodActions.getDate();
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
