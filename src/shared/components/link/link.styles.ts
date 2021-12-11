import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import {
  maxWidthStyles,
  sectionNarrowStyles,
  sectionTitleBlue,
  SPACING_DESKTOP,
  SPACING_MOBILE,
} from '../../../theme/general';
import { colors } from '../../../theme/color';
import { ReactComponent as ElectricsSVG } from '../../../images/icons/electrics.svg';
import { ReactComponent as MechanicsSVG } from '../../../images/icons/mechanics.svg';
import { ReactComponent as DesignSVG } from '../../../images/icons/design.svg';
import { ReactComponent as RoboticsSVG } from '../../../images/icons/robotics.svg';
import { ReactComponent as PLCProgrammingSVG } from '../../../images/icons/plc-programming.svg';
import { Breakpoint, sizes } from '../../../theme/media';

export const Container = styled.div`
  cursor: pointer;
`;
