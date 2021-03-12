import { css } from 'styled-components';

import { colors } from './color';

export const SPACING_DESKTOP = 60;

export const sectionStyles = css`
  padding: 0 ${SPACING_DESKTOP}px;
  margin-top: ${SPACING_DESKTOP * 1.5}px;
  width: 100%;
`;

export const sectionTitle = css`
  width: 100%;
  padding: 0 ${SPACING_DESKTOP}px;
  color: ${colors.grey};
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  margin: 0 0 ${SPACING_DESKTOP / 1.5}px 0;
`;

export const sectionTitleBlue = css`
  ${sectionTitle};
  color: ${colors.blue};
`;
