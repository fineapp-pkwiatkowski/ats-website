import styled, { css } from 'styled-components';
import { CircleFlag as CircleFlagComponent } from 'react-circle-flags';

import { ReactComponent as LogoSVG } from '../../../images/ats-logo.svg';
import { ReactComponent as NavbarLogoSVG } from '../../../images/ats-logo-acronym.svg';
import { colors } from '../../../theme/color';
import { maxWidthStyles, SPACING_DESKTOP, SPACING_MOBILE, SPACING_TABLET } from '../../../theme/general';
import { Breakpoint, media, sizes } from '../../../theme/media';

export const Container = styled.header``;

export const TopHeader = styled.div`
  ${maxWidthStyles};
  width: 100%;
  padding: 40px ${SPACING_DESKTOP}px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const TopHeaderLogo = styled(LogoSVG)`
  width: 220px;
  height: auto;
`;

export const NavItem = styled.li<{ white: boolean }>`
  list-style: none;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ white }) => (white ? colors.white : colors.blue)};
  cursor: pointer;
  position: relative;
  font-size: 20px;
  margin-bottom: 60px;

  ${media(Breakpoint.TABLET)`
    font-size: 28px;
    line-height: 1.5;
  `};

  ${media(Breakpoint.DESKTOP)`
    font-size: 12px;
    margin: 0 24px;
  `};

  &:hover {
    &:after {
      position: absolute;
      left: 0;
      bottom: -4px;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${({ white }) => (white ? colors.white : colors.blue)};
    }
  }
`;

export const Navigation = styled.nav<{ open?: boolean }>`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: center;
  padding: 24px 30px 24px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    padding: ${SPACING_TABLET}px ${SPACING_TABLET * 2}px ${SPACING_TABLET}px;
  }

  ${media(Breakpoint.DESKTOP)`
    display: flex;
    position: static;
    flex-flow: row nowrap;
    align-items: center;
    margin-right: -24px;
    padding: 0;
    height: auto;
    width: auto;
    transform: translateX(0);
    z-index: 1;
  `}
`;

export const Navbar = styled.header<{ visibile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: ${colors.blue};
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${({ visibile }) => (visibile ? 'translateY(0)' : 'translateY(-200%)')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
`;

export const DummyMobileNavbar = styled.div`
  display: none;
  width: 100%;
  height: 100px;
`;

export const MobileNavbar = styled.header<{ scrolled: boolean }>`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  transition: background-color 0.2s ease-in-out;
  margin-top: ${({ scrolled }) => (scrolled ? '0' : '20px')};
  background-color: ${({ scrolled }) => (scrolled ? colors.blue : 'transparent')};
  padding: 0 ${SPACING_MOBILE}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  &::before {
    position: absolute;
    content: '';
    display: block;
    bottom: 100%;
    height: 20px;
    left: 0;
    width: 100%;
    transition: background-color 0.2s ease-in-out;
    background-color: ${({ scrolled }) => (scrolled ? colors.blue : 'transparent')};
  }

  @media (min-width: ${sizes[Breakpoint.TABLET]}px) {
    padding: 0 ${SPACING_TABLET}px;
  }
`;

export const MobileLogo = styled(LogoSVG)<{ white: boolean }>`
  width: 160px;
  margin-top: 5px;
  height: auto;

  .st0 {
    transition: fill 0.3s ease-in-out;
    fill: ${({ white }) => (white ? colors.white : colors.blue)};
  }

  .st0:not(.acronym) {
    transition: ${({ white }) => (white ? 'opacity 0.3s ease-out' : 'opacity 0.2s ease-in')};
    opacity: ${({ white }) => (white ? 0 : 1)};
  }
`;

export const NavbarContent = styled.div`
  padding: 0 ${SPACING_DESKTOP}px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  ${maxWidthStyles};
`;

export const NavbarLogo = styled(NavbarLogoSVG)`
  width: 80px;
  height: auto;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.span<{ white?: boolean }>`
  text-transform: uppercase;
  font-size: 20px;
  margin-right: 24px;
  font-weight: 600;
  color: ${({ white }) => (white ? colors.white : colors.blue)};
  width: 20px;

  ${media(Breakpoint.DESKTOP)`
    font-size: 12px;
    margin-right: 8px;
  `};
`;

export const CircleFlag = styled(CircleFlagComponent)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-right: 8px;
  border: 1px solid ${colors.greyLight2};
`;

export const DropdownIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const activeStyles = (white = false) => css`
  border-color: ${white ? colors.white : colors.grey};

  ${DropdownIcon} {
    transform: rotate(180deg);
    svg {
      fill: ${white ? colors.white : colors.grey};
    }
  }
`;

export const LanguageItem = styled.div<{ active: boolean; white: boolean }>`
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid ${({ white }) => (white ? colors.white50 : colors.greyLight2)};
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: relative;
  z-index: 1;
  ${({ active, white }) => (active ? () => activeStyles(white) : null)};
  margin: 0;
  padding: 8px 12px;

  ${DropdownIcon} svg {
    fill: ${({ white }) => (white ? colors.white50 : colors.greyLight2)};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: ${({ white }) => (white ? colors.white : colors.grey)};

    ${DropdownIcon} {
      svg {
        fill: ${({ white }) => (white ? colors.white : colors.grey)};
      }
    }
  }

  ${media(Breakpoint.DESKTOP)`
    margin: 0 24px;
    padding: 5px 5px 5px 10px;
  `};
`;

export const LanguageDropdown = styled.div<{ visibile: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  border-radius: 4px;
  right: 0;
  width: 100%;
  overflow: hidden;
  background-color: ${colors.white};
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.05);
  transition: ${({ visibile }) =>
    visibile ? 'opacity 0.3s ease-in, transform 0.2s ease-in-out' : 'opacity 0.1s ease-in, transform 0.3s ease-in-out'};
  transform: ${({ visibile }) => (visibile ? 'translateY(0)' : 'translateY(-50%)')};
  opacity: ${({ visibile }) => (visibile ? 1 : 0)};
  visibility: ${({ visibile }) => (visibile ? 'visible' : 'hidden')};
  z-index: -1;
`;

export const Language = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border: none;
  background-color: ${colors.white};
  position: relative;

  &:hover {
    background-color: ${colors.greyLight3};
  }

  &:focus {
    outline: none;
  }
`;

export const LanguageOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const burgerOpenStyles = css`
  &:nth-child(1) {
    top: 7px;
    width: 0%;
    left: 50%;
  }

  &:nth-child(2) {
    transform: rotate(45deg);
  }

  &:nth-child(3) {
    transform: rotate(-45deg);
  }

  &:nth-child(4) {
    top: 7px;
    width: 0%;
    left: 50%;
  }
`;

export const BurgerButton = styled.button.attrs({ type: 'button' })<{ white: boolean; open: boolean }>`
  width: 20px;
  height: 15px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  background: none;
  margin: 0 12px 2px;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${({ white }) => (white ? colors.white : colors.blue)};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 7px;
    }

    &:nth-child(4) {
      top: 14px;
    }

    ${({ open }) => (open ? burgerOpenStyles : null)};
  }
`;

export const NavMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 100%;
  height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  z-index: -1;
  transition: 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
  overflow: hidden;
`;
