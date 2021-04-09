import styled from 'styled-components';
import { animated } from 'react-spring';

import { colors } from '../../theme/color';

export const Container = styled(animated.div)`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colors.greyLight};
`;
