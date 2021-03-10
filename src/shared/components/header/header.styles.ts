import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../../images/ats-logo.svg';
import { colors } from '../../../theme/color';
import { SIDE_PADDING_DESKTOP } from '../../../routes/home/home.constants';


export const Container = styled.header``;

export const TopHeader = styled.div`
  width: 100%;
  padding: 40px ${SIDE_PADDING_DESKTOP}px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const TopHeaderLogo = styled(LogoSVG)`
  width: 200px;
  height: auto;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 24px;
  font-weight: 600;
  color: ${colors.blue};
  cursor: pointer;
  position: relative;
  
  &:hover {
    &:after {
      position: absolute;
      left: 0;
      bottom: -4px;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${colors.blue};
    }
  }
`;

