/**
 * @packageDocumentation
 * @module Controller/NasaApod
 * Interacts with the NasaApod state.
 */

import { format } from 'date-fns';

import nasaApodService from '~/services/nasaApod';
import nasaApodActions from '~/state/actions/nasaApod';

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
   * Gets the title value.
   */
  getTitle: (): string => nasaApodActions.getTitle(),

  /**
   * Gets the copyright value.
   */
  getCopyright: (): string => nasaApodActions.getCopyright(),

  /**
   * Gets the explanation value.
   */
  getExplanation: (): string => nasaApodActions.getExplanation(),

  /**
   * Gets the status of loading
   */
  getLoading: (): boolean => nasaApodActions.getLoading(),

  /**
   * Sets the image/video info.
   */
  setInfo: async (): Promise<void> => {
    try {
      const date = format(new Date(nasaApodController.getDate()), 'yyyy-MM-dd');
      nasaApodActions.setLoading(true);
      const res = await nasaApodService.get(date);
      if (res.success) {
        nasaApodActions.setLink(res.payload.url);
        nasaApodActions.setTitle(res.payload.title);
        // eslint-disable-next-line no-unused-expressions
        res.payload.copyright ? nasaApodActions.setCopyright(res.payload.copyright) : nasaApodActions.setCopyright('-');
        nasaApodActions.setExplanation(res.payload.explanation);
      } else {
        nasaApodActions.setLink('');
        nasaApodActions.setTitle('');
        nasaApodActions.setCopyright('');
        nasaApodActions.setExplanation('');
      }
      nasaApodActions.setLoading(false);
    } catch (error) {
      nasaApodActions.setLink('');
      nasaApodActions.setTitle('');
      nasaApodActions.setCopyright('');
      nasaApodActions.setExplanation('');
    }
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
