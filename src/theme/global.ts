import { createGlobalStyle } from 'styled-components';
import { colors } from './color';

import { fontFamily } from './font';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${fontFamily.primary}, 'Helvetica', sans-serif;
    background-color: ${colors.greyLight};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
