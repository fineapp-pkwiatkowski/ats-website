import styled from 'styled-components';

import { colors } from '../../../theme/color';
import { SPACING_DESKTOP } from '../../../theme/general';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${SPACING_DESKTOP}px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: grey;
  position: relative;
  overflow: hidden;
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
`;

export const Title = styled.h1`
  position: absolute;
  height: 100%;
  display: flex;
  padding: 0 ${SPACING_DESKTOP}px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  align-items: center;
  color: ${colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
`;
