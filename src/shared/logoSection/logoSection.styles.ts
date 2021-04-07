import styled from 'styled-components';
import {
  maxNarrowWidthStyles,
  sectionStyles,
  sectionTitleBlue,
  SPACING_DESKTOP,
  SPACING_MOBILE,
} from '../../theme/general';
import { Breakpoint, sizes } from '../../theme/media';

export const Container = styled.section`
  ${sectionStyles};
`;

export const Title = styled.h2`
  ${sectionTitleBlue};
`;

export const Content = styled.div`
  margin-top: 50px;
  display: grid;
  padding: 0 ${SPACING_MOBILE * 2}px;
  ${maxNarrowWidthStyles};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: ${SPACING_MOBILE * 4}px;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    padding: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: ${SPACING_DESKTOP}px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 80px;
  object-fit: contain;
`;
