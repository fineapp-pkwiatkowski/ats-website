import styled  from 'styled-components';

import { colors } from '../../../theme/color';
import { sectionStyles, sectionTitle, SPACING_DESKTOP } from '../../../theme/general';

export const Container = styled.section`
  ${sectionStyles};
  margin-top: ${SPACING_DESKTOP}px;
`;

export const Tile = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.05);
  padding: ${SPACING_DESKTOP}px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  ${sectionTitle};
`;

export const Content = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
`;

export const Description = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 2;
  text-align: justify;
  max-width: calc(60% - ${SPACING_DESKTOP / 1.5}px);
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 40%;
  right: 0;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
