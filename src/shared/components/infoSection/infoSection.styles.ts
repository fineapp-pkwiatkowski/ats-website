import styled from 'styled-components';

import { colors } from '../../../theme/color';
import { sizes, Breakpoint } from '../../../theme/media';
import {
  maxWidthStyles,
  sectionNarrowStyles,
  sectionTitle,
  SPACING_DESKTOP,
  SPACING_MOBILE,
  SPACING_TABLET,
} from '../../../theme/general';

export const Container = styled.section`
  ${sectionNarrowStyles};
  ${maxWidthStyles};
  margin-top: ${2 * SPACING_MOBILE}px;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    margin-top: ${SPACING_DESKTOP}px;
    padding: 0 ${SPACING_DESKTOP}px;
  }

  @media (min-width: 1280px) {
    padding: 0 ${SPACING_DESKTOP * 2}px;
  }
`;

export const Tile = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.05);
  padding: ${2 * SPACING_MOBILE}px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    padding: ${SPACING_TABLET}px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    padding: ${SPACING_DESKTOP}px;
  }
`;

export const Title = styled.h2`
  ${sectionTitle};
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

export const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.75;
  color: ${colors.grey};
  text-align: justify;
  margin: 0 0 ${SPACING_MOBILE * 2}px 0;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    margin: 0;
    line-height: 2;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    float: right;
    width: 45%;
    margin-left: ${SPACING_TABLET}px;
    margin-bottom: 10px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    float: right;
    width: 40%;
    max-height: 220px;
  }

  @media (min-width: 1280px) {
    margin-left: ${SPACING_DESKTOP}px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
