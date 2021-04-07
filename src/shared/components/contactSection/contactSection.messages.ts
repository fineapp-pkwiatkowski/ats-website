/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: `contactSection.title`,
    defaultMessage: 'Kontakt',
  },
  country: {
    id: `contactSection.country`,
    defaultMessage: 'Polska',
  },
  namePlaceholder: {
    id: `contactSection.form.namePlaceholder`,
    defaultMessage: 'Imię i nazwisko*',
  },
  emailPlaceholder: {
    id: `contactSection.form.emailPlaceholder`,
    defaultMessage: 'E-mail*',
  },
  companyNamePlaceholder: {
    id: `contactSection.form.companyNamePlaceholder`,
    defaultMessage: 'Nazwa firmy',
  },
  phoneNumberPlaceholder: {
    id: `contactSection.form.phoneNumberPlaceholder`,
    defaultMessage: 'Numer kontaktowy',
  },
  messagePlaceholder: {
    id: `contactSection.form.messagePlaceholder`,
    defaultMessage: 'Wiadomość*',
  },
  fieldRequiredError: {
    id: `contactSection.form.fieldRequiredError`,
    defaultMessage: 'To pole jest wymagane.',
  },
  fieldMaxNameLengthError: {
    id: `contactSection.form.fieldMaxNameLengthError`,
    defaultMessage: 'Maksymalna ilość znaków wynosi 50.',
  },
  fieldMaxMessageLengthError: {
    id: `contactSection.form.fieldMaxMessageLengthError`,
    defaultMessage: 'Maksymalna ilość znaków wynosi 1000.',
  },
  fieldInvalidEmailError: {
    id: `contactSection.form.fieldInvalidEmailError`,
    defaultMessage: 'Nieprawidłowy email.',
    description: 'email',
  },
  fieldInvalidNumberError: {
    id: `contactSection.form.fieldInvalidNumberError`,
    defaultMessage: 'Nieprawidłowy numer telefonu.',
  },
  submitButton: {
    id: `contactSection.form.submitButton`,
    defaultMessage: 'Wyślij',
  },
  submitButtonSending: {
    id: `contactSection.form.submitButtonSending`,
    defaultMessage: 'Wysyłanie...',
  },
  contactFormTitle: {
    id: `contactSection.contactFormTitle`,
    defaultMessage: 'Formularz kontaktowy',
  },
  contactFormSuccessMessage: {
    id: `contactSection.contactFormSuccessMessage`,
    defaultMessage:
      'Wiadomość została wysłana.<br></br>Postaramy się odpowiedzieć jak najszybciej.<br></br>Dziękujemy!',
  },
  contactFormFailureMessage: {
    id: `contactSection.contactFormFailureMessage`,
    defaultMessage: 'Wiadomość nie została wysłana.<br></br>Proszę spróbować ponownie.',
  },
});
