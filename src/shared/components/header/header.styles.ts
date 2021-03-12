import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../../images/ats-logo.svg';
import { colors } from '../../../theme/color';
import { SPACING_DESKTOP } from '../../../theme/general';

export const Container = styled.header``;

export const TopHeader = styled.div`
  width: 100%;
  padding: 40px ${SPACING_DESKTOP}px;
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
  margin-right: -24px;
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

export const Navbar = styled.header<{ display: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  padding: 0 ${SPACING_DESKTOP}px;
  background-color: ${colors.white};
  z-index: 10;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  transform: ${({ display }) => display ? 'translateY(0)' : 'translateY(-100%)'};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.03);
`;

export const NavbarLogo = styled(LogoSVG)`
  height: 50px;
  width: auto;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;
