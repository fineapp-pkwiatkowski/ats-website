import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import {
  maxNarrowWidthStyles,
  sectionTitleBlue,
  sectionWhiteStyles,
  SPACING_DESKTOP,
  SPACING_MOBILE,
} from '../../theme/general';
import { colors } from '../../theme/color';
import { ReactComponent as LogoSVG } from '../../images/ats-logo-vertical.svg';
import { Breakpoint, sizes } from '../../theme/media';

export const Container = styled(animated.section)`
  ${sectionWhiteStyles};
`;

export const Title = styled.h2`
  ${sectionTitleBlue};
`;

export const Content = styled.div`
  ${maxNarrowWidthStyles};
`;

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
  margin-bottom: ${SPACING_DESKTOP / 2}px;
`;

const textStyles = css`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.75;
  text-align: justify;
  color: ${colors.grey};

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    line-height: 2;
  }
`;

export const Text = styled.div`
  ${textStyles};
`;

export const LogoWrapper = styled.div`
  float: left;
  align-self: stretch;
  width: 40%;
  max-width: 158px;
  margin-right: ${SPACING_MOBILE * 2}px;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    max-width: 112px;
    width: 18%;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    width: 12%;
  }
`;

export const VerticalLogo = styled(LogoSVG)`
  height: 100%;
  width: 100%;
`;

export const FullText = styled.p`
  ${textStyles};
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    flex-flow: row wrap;
    justify-content: center;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NumberTileWrapper = styled.div`
  width: 300px;
  height: 250px;
  min-width: 250px;
  margin: ${SPACING_MOBILE}px;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    width: 260px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    width: calc(33.33% - ${SPACING_DESKTOP / 2}px);
    height: 250px;
  }
`;
