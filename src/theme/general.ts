import { css } from 'styled-components';

import { colors } from './color';
import { Breakpoint, sizes } from './media';

export const SPACING_MOBILE = 12;
export const SPACING_TABLET = 30;
export const SPACING_DESKTOP = 60;
export const MAX_CONTENT_WIDTH = 1440;
export const MAX_NARROW_CONTENT_WIDTH = 1000;

export const sectionStyles = css`
  padding: ${SPACING_MOBILE * 2}px ${SPACING_MOBILE}px 0;
  margin-top: ${SPACING_DESKTOP / 2}px;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    padding: 0 ${SPACING_TABLET}px;
    margin-top: ${SPACING_DESKTOP / 1.5}px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    padding: 0 ${SPACING_DESKTOP}px;
    margin-top: ${SPACING_DESKTOP * 1.5}px;
  }
`;

export const sectionNarrowStyles = css`
  ${sectionStyles};
  padding: ${SPACING_MOBILE * 2}px ${SPACING_MOBILE}px 0;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    padding: 0 ${2 * SPACING_DESKTOP}px;
  }
`;

export const sectionWhiteStyles = css`
  ${sectionStyles};
  background-color: ${colors.white};
  padding: ${2 * SPACING_MOBILE}px;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    padding: ${SPACING_TABLET}px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    padding: ${SPACING_DESKTOP}px;
  }
`;

export const sectionBlueStyles = css`
  ${sectionStyles};
  background-color: ${colors.blue};
`;

export const maxWidthStyles = css`
  max-width: ${MAX_CONTENT_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
`;

export const maxNarrowWidthStyles = css`
  ${maxWidthStyles};
  max-width: ${MAX_NARROW_CONTENT_WIDTH}px;
`;

export const sectionTitle = css`
  width: 100%;
  color: ${colors.grey};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  padding: 0;
  margin: 0 0 ${SPACING_DESKTOP / 1.5}px 0;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    font-size: 22px;
    padding: 0 ${SPACING_DESKTOP}px;
    margin: 0 0 ${SPACING_DESKTOP / 1.5}px 0;
  }
`;

export const sectionTitleBlue = css`
  ${sectionTitle};
  color: ${colors.blue};
`;

export const defaultButtonStyles = css`
  border-radius: 4px;
  display: flex;
  background-color: ${colors.blue};
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  padding: 10px 60px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.blueHover};
  }

  &:active {
    background-color: ${colors.blueActive};
  }

  &:focus {
    outline: none;
  }
`;
