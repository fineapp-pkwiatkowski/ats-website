import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import CircularProgress from '@material-ui/core/CircularProgress';
import {
  sectionWhiteStyles,
  sectionTitleBlue,
  SPACING_DESKTOP,
  maxNarrowWidthStyles,
  defaultButtonStyles,
  sectionTitle,
  SPACING_MOBILE,
} from '../../../theme/general';
import { colors } from '../../../theme/color';
import { Breakpoint, sizes } from '../../../theme/media';

export const Container = styled.section`
  ${sectionWhiteStyles};
`;

export const Title = styled.h2`
  ${sectionTitleBlue};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  ${maxNarrowWidthStyles};

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

export const Information = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

const formHiddenStyles = css`
  border-radius: 8px;
  border: 1px solid ${colors.greyLight};

  input,
  textarea,
  button {
    visibility: hidden;
  }

  svg {
    fill: ${colors.success};
  }
`;

export const Form = styled.form<{ hidden: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  position: relative;

  ${({ hidden }) => (hidden ? formHiddenStyles : null)};

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    width: 60%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  margin-bottom: ${SPACING_DESKTOP / 3}px;

  ${InputWrapper}:nth-of-type(2) {
    margin-top: ${SPACING_DESKTOP / 3}px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    flex-direction: row;
    justify-content: stretch;
    align-items: flex-start;

    ${InputWrapper}:nth-of-type(2) {
      margin-top: 0;
      margin-left: ${SPACING_DESKTOP / 3}px;
    }
  }
`;

const inputStyles = css`
  height: 50px;
  width: 100%;
  padding: 12px;
  border: 1px solid ${colors.greyLight2};
  color: ${colors.grey};
  transition: 0.2s ease-in-out;
  border-radius: 4px;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    padding: 12px;
    font-size: 14px;
  }
`;

const inputErrorStyles = css`
  ${inputStyles};
  border-color: ${colors.error};
  color: ${colors.error};
  margin-bottom: 10px;

  &:focus {
    border-color: ${colors.error};
  }
`;

export const Input = styled.input<{ error: boolean }>`
  ${inputStyles};
  ${({ error }) => (error ? inputErrorStyles : null)};
`;

export const Textarea = styled.textarea<{ error: boolean }>`
  ${inputStyles};
  min-height: 300px;
  min-width: 100%;
  max-width: 100%;
  ${({ error }) => (error ? inputErrorStyles : null)};
`;

export const Error = styled.p`
  position: absolute;
  left: 4px;
  bottom: -10px;
  color: ${colors.error};
  padding: 0;
  margin: 0;
  font-size: 12px;
`;

export const SubmitButton = styled(animated.button)`
  ${defaultButtonStyles};
  align-self: flex-end;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    align-self: flex-start;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${SPACING_DESKTOP / 3}px;
`;

const infoText = css`
  color: ${colors.grey};
  text-decoration: none;
  font-style: normal;
  flex: 1;
  text-align: left;
  font-size: 14px;
  padding: 0;
`;

export const Info = styled.p`
  ${infoText};
  margin: 0;
  flex: 0;
`;

export const Email = styled.a`
  ${infoText};
`;

export const Phone = styled.a`
  ${infoText};
`;

export const Address = styled.address`
  ${infoText};
`;

export const Prefix = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60px;
  font-size: 14px;
  margin-right: 20px;
  font-weight: 600;
  color: ${colors.greyLight2};

  svg {
    fill: ${colors.greyLight2};
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    width: 40%;
  }
`;

export const FormOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white50};
`;

export const Progress = styled(CircularProgress)`
  svg {
    color: ${colors.blue};
  }
`;

export const SuccessMessage = styled.p`
  ${infoText};
  line-height: 2;
  text-align: center;
  width: 100%;
`;

export const FailureMessage = styled.p`
  position: absolute;
  text-align: right;
  width: 50%;
  right: 0;
  bottom: 0;
  color: ${colors.error};
  padding: 0;
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
`;

export const Subtitle = styled.h3`
  ${sectionTitle};
  margin-top: ${SPACING_MOBILE * 2}px;
  font-size: 16px;
  font-weight: 500;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    display: none;
  }
`;
