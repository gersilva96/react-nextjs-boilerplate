/**
 * @packageDocumentation
 * @module Controller/NasaApod
 * Interacts with the NasaApod state.
 */

import moment from 'moment';
import nasaApodActions from '~/state/actions/nasaApod';
import nasaApodService from '~/services/nasaApod';

const nasaApodController = {
  /**
   * Gets the image link.
   */
  getImage: (): string => nasaApodActions.getImage(),

  /**
   * Gets the date value.
   */
  getDate: (): Date => nasaApodActions.getDate(),

  /**
   * Gets the status of loading
   */
  getLoading: (): boolean => nasaApodActions.getLoading(),

  /**
   * Sets and gets a new image.
   */
  setImage: async (): Promise<string> => {
    try {
      const date = nasaApodController.getDate();
      nasaApodActions.setLoading(true);
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const img: string = await nasaApodService.get(formattedDate);
      nasaApodActions.setImage(img);
      nasaApodActions.setLoading(false);
    } catch (error) {
      nasaApodActions.setImage('');
    }
    return nasaApodController.getImage();
  },

  /**
   * Sets and gets the date value.
   * @param date Date to be setted.
   */
  setDate: (date: Date): Date => {
    nasaApodActions.setDate(date);
    return nasaApodActions.getDate();
  },
};

export default nasaApodController;
