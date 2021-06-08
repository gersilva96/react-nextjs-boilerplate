/**
 * @packageDocumentation
 * @module internationalization
 * It allows to interact in more than one language.
 */
import i18n from 'i18next';

import resources from './resources';
import CONSTANTS from '~/constants';

const someLanguage = resources.es.translation;

type PossibleTextsTypes = keyof typeof someLanguage;

i18n.init({
  resources,
  lng: CONSTANTS.GENERAL.DEFAULT_LANGUAGE,
  initImmediate: true,
});

/**
 * Internationalization methods.
 */
const internationalization = {
  /**
   * Gets an specific text by its code.
   * @param code Identifier of the text.
   */
  get: (code: PossibleTextsTypes): string => i18n.t(code),

  /**
   * Returns internationalization languages.
   */
  getLanguages: (): string[] => Object.keys(resources),

  /**
   * Set internationalization language.
   * @param language Language to set in i18n.
   */
  setLanguage: async (language: string): Promise<boolean> => {
    await i18n.changeLanguage(language);
    return true;
  },
};

export default internationalization;
