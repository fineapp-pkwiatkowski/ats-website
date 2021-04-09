import styled from 'styled-components';

import { colors } from '../../../theme/color';
import { defaultButtonStyles, SPACING_MOBILE } from '../../../theme/general';

export const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  transition: transform 0.3s ease-in-out;
  transition-delay: ${({ visible }) => (visible ? '1.5s' : '0.2s')};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(100%)')};
  padding: ${SPACING_MOBILE * 2}px ${SPACING_MOBILE * 2}px;
`;

export const AcceptButton = styled.button.attrs({ type: 'button' })`
  ${defaultButtonStyles};
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CookieseMessage = styled.p`
  padding: 0;
  margin: 0 30px 0 0;
`;
