import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

import { colors } from '../../../theme/color';
import { maxWidthStyles, sectionStyles, SPACING_DESKTOP, SPACING_MOBILE, SPACING_TABLET } from '../../../theme/general';
import { Breakpoint, sizes } from '../../../theme/media';

export const Container = styled(animated.section)`
  ${sectionStyles};
  ${maxWidthStyles};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 0;
  padding-top: 0;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    margin-top: 0;
    padding-top: 0;
  }
`;

const backgroundAnimation = keyframes`
  0% {
      background-position: 100% 0%;
  }
  100% {
      background-position: 15% 100%;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 60vh;
  max-height: 500px;
  position: relative;
  overflow: hidden;
  background: ${colors.blueAverage1};
  background: linear-gradient(
    45deg,
    ${colors.blueAverage1} 0%,
    ${colors.blueAverage2} 33%,
    ${colors.blueAverage1} 66%,
    ${colors.blueAverage2} 100%
  );
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 3s linear infinite;
`;

export const VideoBackground = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('./hero-blurred.png') no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 0;
`;

export const Video = styled(animated.video)`
  position: absolute;
  top: 50%;
  bottom: 0;
  right: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;

  @media (orientation: landscape) {
    top: 0;
    left: auto;
    right: 0;
    min-height: 100%;
    width: 100%;
    transform: none;
    max-height: none;
  }

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) or (orientation: landscape) {
    top: 0;
    left: auto;
    right: 0;
    min-height: 100%;
    width: 100%;
    transform: none;
    max-height: none;
  }
`;

export const Title = styled(animated.h1)`
  position: absolute;
  height: 100%;
  display: flex;
  padding: 0 ${SPACING_MOBILE}px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  align-items: center;
  text-align: center;
  color: ${colors.white};
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  width: 100%;
  justify-content: center;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    padding: 0 ${SPACING_TABLET}px;
    font-size: 48px;
    line-height: 59px;
    text-align: left;
    justify-content: flex-start;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    padding: 0 ${SPACING_DESKTOP}px;
  }
`;
