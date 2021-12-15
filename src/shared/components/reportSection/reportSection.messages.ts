/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: `reportSection.title`,
    defaultMessage: 'Formularz zgłaszania nieprawidłowości',
  },
  country: {
    id: `reportSection.country`,
    defaultMessage: 'Polska',
  },
  namePlaceholder: {
    id: `reportSection.form.namePlaceholder`,
    defaultMessage: 'Imię i nazwisko (opcjonalnie)',
  },
  emailPlaceholder: {
    id: `reportSection.form.emailPlaceholder`,
    defaultMessage: 'E-mail (opcjonalnie)',
  },
  companyNamePlaceholder: {
    id: `reportSection.form.companyNamePlaceholder`,
    defaultMessage: 'Nazwa firmy (opcjonalnie)',
  },
  phoneNumberPlaceholder: {
    id: `reportSection.form.phoneNumberPlaceholder`,
    defaultMessage: 'Numer telefonu (opcjonalnie)',
  },
  messagePlaceholder: {
    id: `reportSection.form.messagePlaceholder`,
    defaultMessage: 'Wiadomość*',
  },
  fieldRequiredError: {
    id: `reportSection.form.fieldRequiredError`,
    defaultMessage: 'To pole jest wymagane.',
  },
  fieldMaxNameLengthError: {
    id: `reportSection.form.fieldMaxNameLengthError`,
    defaultMessage: 'Maksymalna ilość znaków wynosi 50.',
  },
  fieldMaxMessageLengthError: {
    id: `reportSection.form.fieldMaxMessageLengthError`,
    defaultMessage: 'Maksymalna ilość znaków wynosi 1000.',
  },
  fieldInvalidEmailError: {
    id: `reportSection.form.fieldInvalidEmailError`,
    defaultMessage: 'Nieprawidłowy email.',
    description: 'email',
  },
  fieldInvalidNumberError: {
    id: `reportSection.form.fieldInvalidNumberError`,
    defaultMessage: 'Nieprawidłowy numer telefonu.',
  },
  submitButton: {
    id: `reportSection.form.submitButton`,
    defaultMessage: 'Wyślij',
  },
  submitButtonSending: {
    id: `reportSection.form.submitButtonSending`,
    defaultMessage: 'Wysyłanie...',
  },
  reportFormTitle: {
    id: `reportSection.reportFormTitle`,
    defaultMessage: 'Formularz zgłaszania nieprawidłowości',
  },
  reportFormSuccessMessage: {
    id: `reportSection.reportFormSuccessMessage`,
    defaultMessage: 'Wiadomość została wysłana.<br></br>Dziękujemy!',
  },
  reportFormFailureMessage: {
    id: `reportSection.reportFormFailureMessage`,
    defaultMessage: 'Wiadomość nie została wysłana.<br></br>Proszę spróbować ponownie.',
  },
});
