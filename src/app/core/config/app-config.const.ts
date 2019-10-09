/**
 * Global Configuration, i.e. languages, locale, date formats etc.
 *
 * Shared settings for all environments: dev, prod, stage etc.
 */
import { AppConfig } from '../interfaces/app-config.interface';

export const appConfig: AppConfig = {
  appTitle: 'Noteboox',
  browserTabTitleDelimiter: ' | ',
  defaultLanguage: 'pl_PL',
  availableLanguages: ['pl_PL']
};
