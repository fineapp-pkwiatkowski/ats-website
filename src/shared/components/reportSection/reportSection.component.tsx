import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import ReactScroll, { Element } from 'react-scroll';
import { useSpring, config } from 'react-spring';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { has } from 'ramda';

import CheckIcon from '@material-ui/icons/Check';
import {
  Container,
  Content,
  Error,
  Form,
  FormOverlay,
  FormRow,
  Input,
  InputWrapper,
  Progress,
  SubmitButton,
  SuccessMessage,
  Textarea,
  Title,
  FailureMessage,
  Tile,
} from './reportSection.styles';
import messages from './reportSection.messages';
import { FormStatus, ReportFormType } from './reportSection.types';

export const PHONE_NUMBER_REGEX = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const SCROLL_PROPS = {
  duration: 500,
  delay: 100,
  smooth: true,
  offset: -160,
};

export const animationProps = {
  opacity: 1,
  transform: 'translateY(0)',
  from: { opacity: 0, transform: 'translateY(-25px)' },
  delay: 200,
  config: config.molasses,
};

export const ReportSection = () => {
  const intl = useIntl();
  const [pressedButton, setPressedButton] = useState(false);
  const { x } = useSpring({ from: { x: 1 }, x: pressedButton ? 0.95 : 1, config: config.wobbly });
  const containerAnimationProps = useSpring(animationProps);
  const titleAnimationProps = useSpring({
    ...animationProps,
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 400,
    config: config.slow,
  });
  const contentAnimationProps = useSpring({
    ...animationProps,
    from: { opacity: 0, transform: 'translateY(-30px)' },
    delay: 500,
    config: config.slow,
  });

  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDLE);
  const isSending = formStatus === FormStatus.SENDING;
  const isSent = formStatus === FormStatus.SUCCESS;
  const isNotSent = formStatus === FormStatus.FAILURE;

  useEffect(() => {
    if (isNotSent) {
      setTimeout(() => {
        setFormStatus(FormStatus.IDLE);
      }, 4000);
    }
  }, [isNotSent]);

  const validationSchema = object().shape({
    name: string().max(50, intl.formatMessage(messages.fieldMaxNameLengthError)),
    email: string()
      .email(intl.formatMessage(messages.fieldInvalidEmailError))
      .max(50, intl.formatMessage(messages.fieldInvalidEmailError)),
    companyName: string().max(50, intl.formatMessage(messages.fieldMaxNameLengthError)),
    phoneNumber: string().matches(PHONE_NUMBER_REGEX, intl.formatMessage(messages.fieldInvalidNumberError)),
    message: string()
      .required(intl.formatMessage(messages.fieldRequiredError))
      .max(1000, intl.formatMessage(messages.fieldMaxMessageLengthError)),
  });

  const handleFormSubmit = (values: ReportFormType) => {
    setFormStatus(FormStatus.SENDING);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'report', ...values }),
    })
      .then(() => setFormStatus(FormStatus.SUCCESS))
      .catch(() => setFormStatus(FormStatus.FAILURE));
  };

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    isValid,
    submitCount,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      companyName: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: ReportFormType) => handleFormSubmit(values),
  });

  const scrollToInput = (inputName: string) => {
    ReactScroll.scroller.scrollTo(inputName, SCROLL_PROPS);
    setTimeout(() => {
      document.getElementById(inputName)?.focus();
    }, SCROLL_PROPS.duration);
  };

  useEffect(() => {
    if (!isValid) {
      if (has('name', errors)) {
        scrollToInput('name');
      } else if (has('email', errors)) {
        scrollToInput('email');
      } else if (has('companyName', errors)) {
        scrollToInput('companyName');
      } else if (has('phoneNumber', errors)) {
        scrollToInput('phoneNumber');
      } else if (has('message', errors)) {
        scrollToInput('message');
      }
    }
  }, [submitCount, isSubmitting]);

  return (
    <Container style={containerAnimationProps}>
      <Tile>
        <Title style={titleAnimationProps}>
          <FormattedMessage {...messages.title} />
        </Title>

        <Content style={contentAnimationProps}>
          <Form name="contact" onSubmit={handleSubmit} noValidate hidden={isSent}>
            <input type="hidden" name="form-name" value="report" />
            <FormRow>
              <InputWrapper>
                <Element name="name">
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder={intl.formatMessage(messages.namePlaceholder)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={!!(touched.name && errors.name)}
                    readOnly={[FormStatus.SENDING, FormStatus.SUCCESS].includes(formStatus)}
                  />
                </Element>
                {!!(touched.name && errors.name) && <Error>{errors.name}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder={intl.formatMessage(messages.emailPlaceholder)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={!!(touched.email && errors.email)}
                  readOnly={[FormStatus.SENDING, FormStatus.SUCCESS].includes(formStatus)}
                />
                {!!(touched.email && errors.email) && <Error>{errors.email}</Error>}
              </InputWrapper>
            </FormRow>

            <FormRow>
              <InputWrapper>
                <Input
                  name="companyName"
                  id="companyName"
                  type="text"
                  placeholder={intl.formatMessage(messages.companyNamePlaceholder)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                  error={!!(touched.companyName && errors.companyName)}
                  readOnly={[FormStatus.SENDING, FormStatus.SUCCESS].includes(formStatus)}
                />
                {!!(touched.companyName && errors.companyName) && <Error>{errors.companyName}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="phoneNumber"
                  id="phoneNumber"
                  type="tel"
                  placeholder={intl.formatMessage(messages.phoneNumberPlaceholder)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  error={!!(touched.phoneNumber && errors.phoneNumber)}
                  readOnly={[FormStatus.SENDING, FormStatus.SUCCESS].includes(formStatus)}
                />
                {!!(touched.phoneNumber && errors.phoneNumber) && <Error>{errors.phoneNumber}</Error>}
              </InputWrapper>
            </FormRow>

            <FormRow>
              <InputWrapper>
                <Textarea
                  name="message"
                  id="message"
                  placeholder={intl.formatMessage(messages.messagePlaceholder)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  error={!!(touched.message && errors.message)}
                  readOnly={[FormStatus.SENDING, FormStatus.SUCCESS].includes(formStatus)}
                />
                {!!(touched.message && errors.message) && <Error>{errors.message}</Error>}
              </InputWrapper>
            </FormRow>

            <SubmitButton
              style={{ transform: x.to((x) => `scale(${x})`) }}
              type="submit"
              onPointerDown={() => {
                setPressedButton(true);
              }}
              onPointerUp={() => {
                setPressedButton(false);
              }}
            >
              {isSending ? (
                <FormattedMessage {...messages.submitButtonSending} />
              ) : (
                <FormattedMessage {...messages.submitButton} />
              )}
            </SubmitButton>

            {isSending && (
              <FormOverlay>
                <Progress />
              </FormOverlay>
            )}

            {isSent && (
              <FormOverlay>
                <SuccessMessage>
                  <CheckIcon fontSize="large" />
                  <FormattedMessage
                    {...messages.reportFormSuccessMessage}
                    values={{
                      br: () => (
                        <>
                          <br />
                        </>
                      ),
                    }}
                  />
                </SuccessMessage>
              </FormOverlay>
            )}

            {isNotSent && (
              <FailureMessage>
                <FormattedMessage
                  {...messages.reportFormFailureMessage}
                  values={{
                    br: () => (
                      <>
                        <br />
                      </>
                    ),
                  }}
                />
              </FailureMessage>
            )}
          </Form>
        </Content>
      </Tile>
    </Container>
  );
};
