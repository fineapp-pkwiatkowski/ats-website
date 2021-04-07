export interface ContactFormType {
  name: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  message: string;
}

export enum FormStatus {
  IDLE = 'idle',
  SENDING = 'sending',
  SUCCESS = 'success',
  FAILURE = 'failure',
}
