import styled, { css } from 'styled-components';

import {
  maxWidthStyles,
  sectionBlueStyles,
  SPACING_DESKTOP,
  SPACING_MOBILE,
  SPACING_TABLET,
} from '../../../theme/general';
import { colors } from '../../../theme/color';
import { ReactComponent as LogoSVG } from '../../../images/ats-logo.svg';
import { Breakpoint, sizes } from '../../../theme/media';

export const Container = styled.footer`
  ${sectionBlueStyles};
  margin-top: 0;
  padding: ${SPACING_MOBILE * 3}px ${SPACING_MOBILE * 2}px ${SPACING_MOBILE * 4}px;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    margin-top: 0;
    padding: ${SPACING_TABLET}px ${SPACING_TABLET}px ${SPACING_TABLET * 2}px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    margin-top: 0;
    padding: ${SPACING_DESKTOP / 2}px ${SPACING_DESKTOP}px ${SPACING_DESKTOP / 1.5}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: relative;
  ${maxWidthStyles};

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 220px;
  height: auto;

  .st0 {
    fill: ${colors.white};
  }
`;

export const GoTop = styled.button.attrs({ type: 'button' })`
  background: none;
  border: 1px solid ${colors.white};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  align-self: center;
  position: absolute;
  right: 0;
  bottom: -20px;

  svg {
    fill: ${colors.white};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${colors.white25};
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ColumnContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${SPACING_MOBILE * 3}px 4px 0;
  margin: 0;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 6px ${SPACING_DESKTOP}px 0;
    width: auto;
  }
`;

export const Column = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 ${SPACING_MOBILE * 3}px;
  padding: 0;
  flex: 1;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    margin: 0;
    max-width: 30%;
  }
`;

const columnItemStyles = css`
  text-transform: none;
  color: ${colors.white75};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
  list-style: none;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    font-size: 10px;
    line-height: 16px;
    font-weight: 400;
  }
`;

export const FooterNavLink = styled.li`
  ${columnItemStyles};
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
  }
`;

export const FooterColumnItem = styled.li`
  ${columnItemStyles};
`;

export const Copyright = styled.p`
  color: ${colors.white50};
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 10px;
  padding: 0;
  margin: 0;
`;
