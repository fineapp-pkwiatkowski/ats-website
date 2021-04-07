import styled from 'styled-components';
import { colors } from '../../theme/color';
import { SPACING_DESKTOP } from '../../theme/general';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.blue};
  padding: ${SPACING_DESKTOP / 2}px;
  overflow: hidden;
`;

export const Number = styled.p`
  margin: 0;
  padding: 0;
  color: ${colors.blue};
  font-weight: bold;
  font-size: 80px;
  height: 40%;
  text-align: center;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: ${SPACING_DESKTOP / 2}px 0;
  background-color: ${colors.blue};
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  color: ${colors.blue};
  height: 40%;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
`;
