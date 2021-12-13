import enTranslationMessages from './translations/en.json';
import plTranslationMessages from './translations/pl.json';

export const LOCALES = {
  ENGLISH: 'en',
  POLISH: 'pl',
};

export type MessagesObject = Record<string, string>;

const getDefaultLocale = () => {
  if (typeof navigator !== undefined) {
    return navigator.language.toLowerCase().includes('pl') ? LOCALES.POLISH : LOCALES.ENGLISH;
  }

  return LOCALES.POLISH;
};

export const DEFAULT_LOCALE = getDefaultLocale();

export const appLocales = [LOCALES.ENGLISH, LOCALES.POLISH];

export const formatTranslationMessages = (locale: string, messages: MessagesObject): MessagesObject => {
  const defaultFormattedMessages: MessagesObject =
    // @ts-ignore
    locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages as MessagesObject) : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  // @ts-ignore
  [LOCALES.ENGLISH]: formatTranslationMessages(LOCALES.ENGLISH, enTranslationMessages),
  // @ts-ignore
  [LOCALES.POLISH]: formatTranslationMessages(LOCALES.POLISH, plTranslationMessages),
};
