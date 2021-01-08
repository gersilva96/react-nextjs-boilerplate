/**
 * @packageDocumentation
 * @module Controller/NasaApod
 * Interacts with the NasaApod state.
 */

import nasaApodActions from '~/state/actions/nasaApod';
import nasaApodService from '~/services/nasaApod';

const nasaApodController = {
  /**
   * Gets the image link.
   */
  getLink: (): string => nasaApodActions.getLink(),

  /**
   * Gets the date value.
   */
  getDate: (): string => nasaApodActions.getDate(),

  /**
   * Gets the status of loading
   */
  getLoading: (): boolean => nasaApodActions.getLoading(),

  /**
   * Sets and gets a new image.
   */
  setLink: async (): Promise<string> => {
    try {
      const date = nasaApodController.getDate();
      nasaApodActions.setLoading(true);
      const res = await nasaApodService.get(date);
      if (res.success) {
        nasaApodActions.setLink(res.payload.url);
      } else {
        nasaApodActions.setLink('');
      }
      nasaApodActions.setLoading(false);
    } catch (error) {
      nasaApodActions.setLink('');
    }
    return nasaApodController.getLink();
  },

  /**
   * Sets and gets the date value.
   * @param date Date to be setted.
   */
  setDate: (date: string): string => {
    nasaApodActions.setDate(date);
    return nasaApodActions.getDate();
  },
};

export default nasaApodController;
