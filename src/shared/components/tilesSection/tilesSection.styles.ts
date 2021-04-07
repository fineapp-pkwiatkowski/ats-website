import styled, { css } from 'styled-components';

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

export const Container = styled.section`
  ${sectionNarrowStyles};
  ${maxWidthStyles};
`;

export const Title = styled.h2`
  ${sectionTitleBlue};
`;

export const Content = styled.div`
  width: 100%;
`;

export const TilesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  margin: 0;

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    width: calc(100% + ${SPACING_DESKTOP}px);
    margin: 0 0 0 ${-SPACING_DESKTOP / 2}px;
  }
`;

export const Tile = styled.li`
  list-style-type: none;
  flex: 1;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.05);
  padding: ${SPACING_DESKTOP / 3}px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin: 0 0 ${SPACING_MOBILE * 3}px;
  min-width: 100%;

  &:last-of-type {
    margin-bottom: 7px;
  }

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    min-width: 350px;
    flex: 0 0 calc(33.33% - ${SPACING_DESKTOP}px);
    margin: ${SPACING_DESKTOP / 3}px;

    &:last-of-type {
      margin: ${SPACING_DESKTOP / 3}px;
    }
  }
`;

const iconStyles = css`
  position: absolute;
  left: 20px;
  top: 20px;
  height: 32px;
  width: 32px;
  fill: ${colors.blue};
`;

export const ElectricsIcon = styled(ElectricsSVG)`
  ${iconStyles};
`;

export const MechanicsIcon = styled(MechanicsSVG)`
  ${iconStyles};
`;

export const DesignIcon = styled(DesignSVG)`
  ${iconStyles};
`;

export const RoboticsIcon = styled(RoboticsSVG)`
  ${iconStyles};
`;

export const PLCProgrammingIcon = styled(PLCProgrammingSVG)`
  ${iconStyles};
`;

export const TileTitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin: 0 0 0 calc(${SPACING_DESKTOP / 3}px + 32px);
  font-weight: 500;
  color: ${colors.grey};

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 16px;
  margin-top: ${SPACING_DESKTOP / 2}px;
  margin-bottom: 10px;
`;

export const ServiceItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  line-height: 1.25;
  margin-bottom: 16px;
  position: relative;
  color: ${colors.grey};

  @media (min-width: ${sizes[Breakpoint.DESKTOP]}px) {
    font-size: 13px;
    line-height: 1.25;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    left: -16px;
    top: 5px;
    border-radius: 100%;
    width: 4px;
    height: 4px;
    background-color: ${colors.grey};
    opacity: 0.1;
  }
`;
