import styled from 'styled-components';
import { SIDE_PADDING_DESKTOP } from '../../../routes/home/home.constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${SIDE_PADDING_DESKTOP}px;
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
